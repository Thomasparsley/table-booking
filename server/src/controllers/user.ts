import { Express, Router, Request, Response } from "express";
import { IUserService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { decodeToken } from "../helpers";

//TODO: Extract
const TokenCookieName = "token";

export class UserController extends Controller {

    constructor(
        private readonly userService: IUserService,
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        router.get("/", (req, res) => this.all(req, res));
        router.get("/me", (req, res) => this.me(req, res));
        router.get("/:id", (req, res) => this.one(req, res));

        router.post("/", (req, res) => this.create(req, res));
        router.put("/:id", (req, res) => this.update(req, res));
        router.delete("/:id", (req, res) => this.delete(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response) {
        const users = await this.userService.getAll()
        console.log(users);
        res.status(200).json(users);
    }

    private async one(req: Request, res: Response) {
        /*if (!req.params.id) {
            res.status(400);
            return;
        }
        console.log(req.params.id);*/
        const id = new Types.ObjectId(req.params.id);
        const user = await this.userService.getById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }

    private async create(req: Request, res: Response) {
        const user = await this.userService.create(req.body);
        res.status(200).json(user);
    }

    private async update(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.userService.update(id, req.body);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }

    private async delete(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.userService.delete(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }

    private async me(req: Request, res: Response) {
        const token = req.cookies[TokenCookieName];
        const payload = await decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const user = await this.userService.getById(payload._id);
        res.status(200).json(user);
    }
}