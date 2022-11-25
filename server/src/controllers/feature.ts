import { Express, Router, Request, Response } from "express";
import { IFeatureService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";

export class FeatureController extends Controller {

    constructor(
        private readonly featureService: IFeatureService,
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        router.get("/table", (req, res) => this.all(req, res, false));
        router.get("/table/:id", (req, res) => this.one(req, res, false));

        router.post("/table", (req, res) => this.create(req, res, false));
        router.put("/table/:id", (req, res) => this.update(req, res, false));
        router.delete("/table/:id", (req, res) => this.delete(req, res, false));

        router.get("/room", (req, res) => this.all(req, res, true));
        router.get("/room/:id", (req, res) => this.one(req, res, true));

        router.post("/room", (req, res) => this.create(req, res, true));
        router.put("/room/:id", (req, res) => this.update(req, res, true));
        router.delete("/room/:id", (req, res) => this.delete(req, res, true));

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response, isRoomFeature: boolean) {
        const features = this.featureService.getAll(isRoomFeature);
        res.status(200).json(features);
    }

    private async one(req: Request, res: Response, isRoomFeature: boolean) {
        const id = new Types.ObjectId(req.params.id);
        const feature = await this.featureService.getById(id, isRoomFeature);

        if (!feature) {
            res.status(404).json({ message: "Feature not found" });
            return;
        }

        res.status(200).json(feature);
    }

    private async create(req: Request, res: Response, isRoomFeature: boolean) {
        const feature = await this.featureService.create(req.body, isRoomFeature);
        res.status(200).json(feature);
    }

    private async update(req: Request, res: Response, isRoomFeature: boolean) {
        const id = new Types.ObjectId(req.params.id);
        const feature = await this.featureService.update(id, req.body, isRoomFeature);

        if (!feature) {
            res.status(404).json({ message: "Feature not found" });
            return;
        }

        res.status(200).json(feature);
    }

    private async delete(req: Request, res: Response, isRoomFeature: boolean) {
        const id = new Types.ObjectId(req.params.id);
        const feature = await this.featureService.delete(id, isRoomFeature);

        if (!feature) {
            res.status(404).json({ message: "Feature not found" });
            return;
        }

        res.status(200).json(feature);
    }
}