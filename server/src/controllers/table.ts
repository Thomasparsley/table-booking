import { Express, Router, Request, Response } from "express";
import { Types } from "mongoose";
import { DtoNewTable } from "../dtos";
import { ITableService, IFeatureService, IRoomService } from "../services";
import { Controller } from "./controller";
import { authorizedMaker } from "../middleware/auth";


const authorized = authorizedMaker();

export class TableController extends Controller {

    constructor(
        private readonly tableService: ITableService,
        private readonly roomService: IRoomService,
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {

        router.get("/", authorized, (req, res) => this.all(req, res));
        router.get("/schedules", authorized, (req, res) => this.getSchedule(req, res));
        router.post("/schedules/:id", authorized, (req, res) => this.addSchedule(req, res));
        router.get("/:id", authorized, (req, res) => this.one(req, res));
        router.post("/", authorized, (req, res) => this.create(req, res));
        router.put("/:id", authorized, (req, res) => this.update(req, res));
        router.delete("/:id", authorized, (req, res) => this.delete(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async getSchedule(req: Request, res: Response) {
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string) || new Date();
        if (!to) {
            res.status(400).json({ message: "Missing required query parameter 'to'" });
            return;
        }

        this.tableService.getAllForSchedule(from, to);
    }

    private async addSchedule(req: Request, res: Response) {

    }

    private async all(req: Request, res: Response) {
        const tablesFromDb = await this.tableService.getAll()
        const tables: any[] = []

        for (const table of tablesFromDb) {
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
        }

        res.status(200).json(tables);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const table = await this.tableService.getById(id);

        if (!table) {
            res.status(404).json({ message: "Table not found" });
            return;
        }

        const roomId = table.roomId;
        const room = this.roomService.getById(roomId);
        // @ts-ignore
        table["room"] = room;

        res.status(200).json(table);
    }

    private async create(req: Request, res: Response) {
        const payload: DtoNewTable = req.body;
        console.log(payload);

        const tablePayload = payload;
        //const { features, ...tablePayload } = payload;
        /*const featuresIds: Types.ObjectId[] = [];

        features.forEach(async (feature) => {
            const { _id } = await this.featureService.createIfNotExists({ name: feature }, true)
            featuresIds.push(_id);
        });*/

        const table = await this.tableService.create(tablePayload);

        return res.status(200).json(table);
    }

    private async update(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.tableService.update(id, req.body);

        if (!user) {
            res.status(404).json({ message: "Table not found" });
            return;
        }

        res.status(200).json(user);
    }

    private async delete(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const table = await this.tableService.delete(id);

        if (!table) {
            res.status(404).json({ message: "Table not found" });
            return;
        }

        res.status(200).json(table);
    }
}