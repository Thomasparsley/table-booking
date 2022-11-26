import { Express, Router, Request, Response } from "express";
import { ISchedulerStore } from "../interfaces";
import { ISchedulerService, ITableService, IRoomService, IUserService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { authorizedMaker } from "../middleware/auth";
import { decodeToken } from "../helpers";
import { SchedulerStoreModel } from "../models";


const authorized = authorizedMaker();


export class SchedulerController extends Controller {

    constructor(
        private readonly tableService: ITableService,
        private readonly schedulerService: ISchedulerService,
        private readonly roomService: IRoomService,
        private readonly userService: IUserService,
        private readonly schedulerStoreModel: typeof SchedulerStoreModel,
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
        router.put("/tables/:id", authorized, (req, res) => this.updateSchedule(req, res, false));
        router.delete("/tables/:id", authorized, (req, res) => this.deleteSchedule(req, res));

        /*router.get("/rooms", authorized, (req, res) => this.allRoomsSchedules(req, res));
        router.get("/rooms/:id", authorized, (req, res) => this.roomSchedules(req, res));
        router.post("/rooms/:id", authorized, (req, res) => this.createRoomSchedule(req, res));*/
        router.put("/rooms/:id", authorized, (req, res) => this.updateSchedule(req, res, true));
        router.delete("/rooms/:id", authorized, (req, res) => this.deleteSchedule(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async allTableSchedules(req: Request, res: Response) {
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        // free tables
        const allFreeTables = await this.tableService.getAll();
        const allReservedTables = await this.schedulerStoreModel.find();

        const allReservedTablesIds = allReservedTables.map((table) => table.storedId.toString());

        // from allFreeTables remove allReservedTables
        const freeTables = allFreeTables.filter((table) => {
            return !allReservedTablesIds.includes(table._id.toString());
        });

        // add room to free tablesß
        const tables = [];
        for (const table of freeTables) {
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
        const data = req.body;
        const { rooms, tables, fromDate, toDate } = data;
        const from = new Date(fromDate);
        const to = new Date(toDate);

        console.log(data);

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
        for (const tableId of tables) {
            const canSchedule = await this.schedulerService.canSchedule(tableId, from, to);
            console.log(canSchedule);
            if (!canSchedule) {
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

        for (const roomId of rooms) {
            const result = await this.schedulerService.schedule(roomId, true, from, to, user._id);
            if (result != null)
                roomsStore.push(result);
        }

        for (const table of tables) {
            const result = await this.schedulerService.schedule(table, false, from, to, user._id);
            if (result != null)
                tablesStore.push(result);
        }

        res.status(200).json({
            rooms: roomsStore,
            tables: tablesStore
        });
        return;

        /*const schedule = await this.schedulerService.schedule(id, false, from, to);
        if (schedule != null) {
            res.status(200).json(schedule);
        }
        else {
            res.status(400);
        }*/
    }

    private async updateSchedule(req: Request, res: Response, isRoom: boolean) {
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

    private async deleteSchedule(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);

        const schedule = await this.schedulerService.deleteSchedule(id);
        if (schedule) {
            res.status(200).json(schedule);
            const user = await this.userService.getById(schedule.user);
            if (user != null)
                this.userService.sendScheduleDeletionById(user, schedule);
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