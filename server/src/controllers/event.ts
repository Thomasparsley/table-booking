import { Express, Router, Request, Response } from "express";
import { IEventService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { authorizedMaker } from "../middleware/auth";


const authorized = authorizedMaker();



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
        router.get("/", authorized, (req, res) => this.all(req, res));
        router.get("/:id", authorized, (req, res) => this.one(req, res));

        router.post("/", authorized, (req, res) => this.create(req, res));
        router.put("/:id", authorized, (req, res) => this.update(req, res));
        router.delete("/:id", authorized, (req, res) => this.delete(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response) {
        const events = await this.eventService.getAll()
        res.status(200).json(events);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const event = await this.eventService.getById(id);

        if (!event) {
            res.status(404).json({ message: "Event not found" });
            return;
        }

        res.status(200).json(event);
    }

    private async create(req: Request, res: Response) {
        const event = await this.eventService.create(req.body);
        res.status(200).json(event);
    }

    private async update(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const event = await this.eventService.update(id, req.body);

        if (!event) {
            res.status(404).json({ message: "Event not found" });
            return;
        }

        res.status(200).json(event);
    }

    private async delete(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const event = await this.eventService.delete(id);

        if (!event) {
            res.status(404).json({ message: "Event not found" });
            return;
        }

        res.status(200).json(event);
    }
}