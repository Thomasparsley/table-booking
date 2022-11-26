import { Express, Router, Request, Response } from "express";
import { ISchedulerService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { authorizedMaker } from "../middleware/auth";


const authorized = authorizedMaker();


export class SchedulerController extends Controller {

    constructor(
        private readonly scheduler: ISchedulerService
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
        router.post("/tables/:id", authorized, (req, res) => this.createTableSchedule(req, res));
        router.put("/tables/:id", authorized, (req, res) => this.updateTableSchedule(req, res));
        router.delete("/tables/:id", authorized, (req, res) => this.deleteTableSchedule(req, res));

        router.get("/rooms", authorized, (req, res) => this.allRoomsSchedules(req, res));
        router.get("/rooms/:id", authorized, (req, res) => this.roomSchedules(req, res));
        router.post("/rooms/:id", authorized, (req, res) => this.createRoomSchedule(req, res));
        router.put("/rooms/:id", authorized, (req, res) => this.updateRoomSchedule(req, res));
        router.delete("/rooms/:id", authorized, (req, res) => this.deleteRoomSchedule(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async allTableSchedules(req: Request, res: Response) {
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);
        const tables = await this.scheduler.getAllAvailableTables(from, to);
        return res.status(200).json(tables);
    }

    private async tableSchedules(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const tables = await this.scheduler.getSchedules(id);

        res.status(200).json(tables);
    }

    private async createTableSchedule(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        const valid = await this.scheduler.schedule(id, false, from, to);
        res.status(valid ? 200 : 400);
    }

    private async updateTableSchedule(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        const schedule = await this.scheduler.updateSchedule(id, false, from, to);
        res.status(valid ? 200 : 400);
    }

    private async deleteTableSchedule(req: Request, res: Response) {

    }

    private async allRoomsSchedules(req: Request, res: Response) {
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);
        const tables = await this.scheduler.getAllAvailableRooms(from, to);
        return res.status(200).json(tables);
    }

    private async roomSchedules(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const tables = await this.scheduler.getSchedules(id);

        res.status(200).json(tables);
    }

    private async createRoomSchedule(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        const valid = await this.scheduler.schedule(id, false, from, to);
        res.status(valid ? 200 : 400);
    }

    private async updateRoomSchedule(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const from = new Date(req.query.from as string) || new Date();
        const to = new Date(req.query.to as string);

        const schedule = await this.scheduler.updateSchedule(id, false, from, to);
        res.status(valid ? 200 : 400);
    }

    private async deleteRoomSchedule(req: Request, res: Response) {

    }
}