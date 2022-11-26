import { Express, Router, Request, Response } from "express";
import { IRoomService, ITableService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";

export class RoomController extends Controller {

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
        router.get("/", (req, res) => this.all(req, res));
        router.get("/tables/:id", (req, res) => this.allTables(req, res));
        router.get("/:id", (req, res) => this.one(req, res));

        router.post("/", (req, res) => this.create(req, res));
        router.put("/:id", (req, res) => this.update(req, res));
        router.delete("/:id", (req, res) => this.delete(req, res));

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