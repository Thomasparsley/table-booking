import { Express, Router, Request, Response } from "express";
import { Types } from "mongoose";
import { DtoNewTable } from "../dtos";
import { ITableService, IFeatureService } from "../services";
import { Controller } from "./controller";

export class TableController extends Controller {

    constructor(
        private readonly tableService: ITableService,
        private readonly featureService: IFeatureService,
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {

        router.get("/", (req, res) => this.all(req, res));
        router.get("/:id", (req, res) => this.one(req, res));
        router.post("/", (req, res) => this.create(req, res));
        router.put("/", (req, res) => this.update(req, res));
        router.put("/:id", (req, res) => this.delete(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response) {
        const tables = await this.tableService.getAll()

        res.status(200).json(tables);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const table = await this.tableService.getById(id);

        if (!table) {
            res.status(404).json({ message: "Table not found" });
            return;
        }

        res.status(200).json(table);
    }

    private async create(req: Request, res: Response) {
        const payload: DtoNewTable = req.body;
        console.log(payload);

        const { features, ...tablePayload } = payload;
        const featuresIds: Types.ObjectId[] = [];

        features.forEach(async (feature) => {
            const { _id } = await this.featureService.createIfNotExists({ name: feature }, true)
            featuresIds.push(_id);
        });

        const table = await this.tableService.create(tablePayload, featuresIds);

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