import { Express, Router, Request, Response } from "express";
import { ISchedulerStore } from "../interfaces";
import { ISchedulerService, IRoomService, IUserService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { authorizedMaker } from "../middleware/auth";
import { decodeToken } from "../helpers";


const authorized = authorizedMaker();


export class SchedulerController extends Controller {

    constructor(
        private readonly schedulerService: ISchedulerService,
        private readonly roomService: IRoomService,
        private readonly userService: IUserService
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        router.get("/tables", authorized, (req, res) => this.allTableSchedules(req, res));
        router.get("/tables/:id", authorized, (req, res) => this.tableSchedules(req, res));
        router.post("/", authorized, (req, res) => this.createSchedules(req, res));
        router.put("/tables/:id", authorized, (req, res) => this.updateTableSchedule(req, res));
        router.delete("/tables/:id", authorized, (req, res) => this.deleteTableSchedule(req, res));

        /*router.get("/rooms", authorized, (req, res) => this.allRoomsSchedules(req, res));
        router.get("/rooms/:id", authorized, (req, res) => this.roomSchedules(req, res));
        router.post("/rooms/:id", authorized, (req, res) => this.createRoomSchedule(req, res));*/
        //router.put("/rooms/:id", authorized, (req, res) => this.updateRoomSchedule(req, res));
        //router.delete("/rooms/:id", authorized, (req, res) => this.deleteRoomSchedule(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async allTableSchedules(req: Request, res: Response) {
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);
        const storedTables = await this.schedulerService.getAllAvailableTables(from, to);
        let tables: any[] = [];
        for (var table of storedTables) {
            const roomId = table.roomId;
            const room = await this.roomService.getById(roomId);
            tables.push({
                _id: table._id,
                name: table.name,
                seatCount: table.seatCount,
                features: table.features,
                roomId: table.roomId,
                room: room
            });
        };
        return res.status(200).json(tables);
    }

    private async tableSchedules(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const tables = await this.schedulerService.getSchedules(id);

        res.status(200).json(tables);
    }

    private async createSchedules(req: Request, res: Response) {
        const data = JSON.parse(req.body as string);
        const { rooms, tables, fromDate, toDate } = data;
        const from = new Date(fromDate);
        const to = new Date(toDate);

        const token = req.cookies["token"];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const user = await this.userService.getById(payload._id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        let valid = true;
        for (const room of rooms) {
            if (!(await this.schedulerService.canSchedule(room._id, from, to))) {
                valid = false;
                break;
            }
        }
        if (!valid) {
            res.status(400).json({ message: "One or more rooms are not schedulable during this time frame" });
            return;
        }
        valid = true
        for (const table of tables) {
            if (!(await this.schedulerService.canSchedule(table._id, from, to))) {
                valid = false;
                break;
            }
        }
        if (!valid) {
            res.status(400).json({ message: "One or more tables are not schedulable during this time frame" });
            return;
        }

        let roomsStore: ISchedulerStore[] = [];
        let tablesStore: ISchedulerStore[] = [];

        for (const room of rooms) {
            const result = await this.schedulerService.schedule(room._id, true, from, to, user._id);
            if (result != null)
                roomsStore.push(result);
        }

        for (const table of tables) {
            const result = await this.schedulerService.schedule(table._id, false, from, to, user._id);
            if (result != null)
                tablesStore.push(result);
        }

        res.status(200).json({
            rooms: roomsStore,
            tables: tablesStore
        });

        /*const schedule = await this.schedulerService.schedule(id, false, from, to);
        if (schedule != null) {
            res.status(200).json(schedule);
        }
        else {
            res.status(400);
        }*/
    }

    private async updateTableSchedule(req: Request, res: Response) {
        const token = req.cookies["token"];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const user = await this.userService.getById(payload._id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const id = new Types.ObjectId(req.params.id);
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        const schedule = await this.schedulerService.updateSchedule(id, {
            from: from,
            storedId: id,
            isRoom: false,
            to: to,
            user: user._id
        });
        res.status(schedule != null ? 200 : 400);
    }

    private async deleteTableSchedule(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);

        const schedule = await this.schedulerService.deleteSchedule(id);
        if (schedule) {
            res.status(200).json(schedule);
        }
        else {
            res.status(400);
        }
    }

    private async allRoomsSchedules(req: Request, res: Response) {
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);
        const tables = await this.schedulerService.getAllAvailableRooms(from, to);
        return res.status(200).json(tables);
    }

    private async roomSchedules(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const tables = await this.schedulerService.getSchedules(id);

        res.status(200).json(tables);
    }

    private async createRoomSchedule(req: Request, res: Response) {
        const token = req.cookies["token"];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const user = await this.userService.getById(payload._id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const id = new Types.ObjectId(req.params.id);
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        const valid = await this.schedulerService.schedule(id, false, from, to, user._id);
        res.status(valid ? 200 : 400);
    }

    /*private async updateRoomSchedule(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        const schedule = await this.schedulerService.updateSchedule(id, true, from, to);
        res.status(valid ? 200 : 400);
    }

    private async deleteRoomSchedule(req: Request, res: Response) {

    }*/
}