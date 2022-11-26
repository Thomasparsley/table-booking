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
        router.get("/table", (req, res) => {
            try {
                this.all(req, res, false)
            } catch (error) {
                console.error(error);
            }
        });
        router.get("/table/:id", (req, res) => {
            try {
                this.one(req, res, false)
            } catch (error) {
                console.error(error);
            }
        });

        router.post("/table", (req, res) => {
            try {
                this.create(req, res, false)
            } catch (error) {
                console.error(error);
            }
        });
        router.put("/table/:id", (req, res) => {
            try {
                this.update(req, res, false)
            } catch (error) {
                console.error(error);
            }
        });
        router.delete("/table/:id", (req, res) => {
            try {
                this.delete(req, res, false)
            } catch (error) {
                console.error(error);
            }
        });

        router.get("/room", (req, res) => {
            try {
                this.all(req, res, true)
            } catch (error) {
                console.error(error);
            }
        });
        router.get("/room/:id", (req, res) => {
            try {
                this.one(req, res, true)
            } catch (error) {
                console.error(error);
            }
        });

        router.post("/room", (req, res) => {
            try {
                this.create(req, res, true)
            } catch (error) {
                console.error(error);
            }
        });
        router.put("/room/:id", (req, res) => {
            try {
                this.update(req, res, true)
            } catch (error) {
                console.error(error);
            }
        });
        router.delete("/room/:id", (req, res) => {
            try {
                this.delete(req, res, true)
            } catch (error) {
                console.error(error);
            }
        });

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