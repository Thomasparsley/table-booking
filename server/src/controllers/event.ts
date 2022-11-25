import { Express, Router, Request, Response } from "express";
import { IEventService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";

export class EventController extends Controller {

    constructor(
        private readonly eventService: IEventService,
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
        router.put("/:id", (req, res) => this.update(req, res));
        router.delete("/:id", (req, res) => this.delete(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response) {
        const users = await this.eventService.getAll()
        res.status(200).json(users);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.eventService.getById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }

    private async create(req: Request, res: Response) {
        const user = await this.eventService.create(req.body);
        res.status(200).json(user);
    }

    private async update(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.eventService.update(id, req.body);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }

    private async delete(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.eventService.delete(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }
}