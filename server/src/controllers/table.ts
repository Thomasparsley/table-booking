import { Express, Router, Request, Response } from "express";
import { Types } from "mongoose";
import { ITableService } from "../services";
import { Controller } from "./controller";

export class TableController extends Controller {

    constructor(
        private readonly tableService: ITableService,
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        router.post("/", (req, res) => this.all(req, res));
        router.post("/:id", (req, res) => this.one(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response) {
        const users = await this.tableService.getAll()

        res.status(200).json(users);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.tableService.getById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }
}