import { Express, Router, Request, Response } from "express";
import { IRoomService, ITableService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { authorizedMaker } from "../middleware/auth";


const authorized = authorizedMaker();


export class SchedulerController extends Controller {

    constructor(
        private readonly roomService: IRoomService,
        private readonly tableService: ITableService
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        router.get("/tables", authorized, (req, res) => this.allTableSchedules(req, res));
        router.get("/tables/:id", authorized, (req, res) => this.tableSchedule(req, res));
        router.post("/tables", authorized, (req, res) => this.createTableSchedule(req, res));
        router.put("/tables/:id", authorized, (req, res) => this.updateTableSchedule(req, res));
        router.delete("/tables/:id", authorized, (req, res) => this.deleteTablesch(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async all(_: Request, res: Response) {
        const rooms = await this.roomService.getAll()
        return res.status(200).json(rooms);
    }

    private async allTables(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const tables = await this.tableService.getAllForRoom(id);

        res.status(200).json(tables);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const room = await this.roomService.getById(id);

        if (!room) {
            res.status(404).json({ message: "Room not found" });
            return;
        }

        res.status(200).json(room);
    }

    private async create(req: Request, res: Response) {
        const room = await this.roomService.create(req.body);
        res.status(200).json(room);
    }

    private async update(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const room = await this.roomService.update(id, req.body);

        if (!room) {
            res.status(404).json({ message: "Room not found" });
            return;
        }

        res.status(200).json(room);
    }

    private async delete(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const room = await this.roomService.delete(id);

        if (!room) {
            res.status(404).json({ message: "Room not found" });
            return;
        }

        res.status(200).json(room);
    }
}