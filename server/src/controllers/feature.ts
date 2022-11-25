import { Express, Router, Request, Response } from "express";
import { IUserService } from "../services";
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
        router.get("/table", (req, res) => this.allTableFeatures(req, res));
        router.get("/table/:id", (req, res) => this.oneTableFeature(req, res));

        router.post("/table", (req, res) => this.createTableFeature(req, res));
        router.put("/table/:id", (req, res) => this.updateTableFeature(req, res));
        router.delete("/table/:id", (req, res) => this.deleteTableFeature(req, res));

        router.get("/room", (req, res) => this.allRoomFeatures(req, res));
        router.get("/room/:id", (req, res) => this.oneRoomFeature(req, res));

        router.post("/room", (req, res) => this.createRoomFeature(req, res));
        router.put("/room/:id", (req, res) => this.updateRoomFeature(req, res));
        router.delete("/room/:id", (req, res) => this.deleteRoomFeature(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async allTableFeatures(req: Request, res: Response) {
        const features = this.featureService.getAllFeatures(false);
        res.status(200).json(features);
    }
}