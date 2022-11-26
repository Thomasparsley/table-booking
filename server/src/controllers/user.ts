import { Express, Router, Request, Response } from "express";
import { IUserService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { decodeToken } from "../helpers";
import { authorizedMaker } from "../middleware/auth";


//TODO: Extract
const TokenCookieName = "token";

const authorized = authorizedMaker();


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
        router.get("/", authorized, (req, res) => this.all(req, res));
        router.post("/follow/:id", authorized, (req, res) => this.addFollow(req, res));
        router.delete("/follow/:id", authorized, (req, res) => this.deleteFollow(req, res));
        router.get("/me", authorized, (req, res) => this.me(req, res));
        router.get("/:id", authorized, (req, res) => this.one(req, res));

        router.post("/", authorized, (req, res) => this.create(req, res));
        router.put("/:id", authorized, (req, res) => this.update(req, res));
        router.delete("/:id", authorized, (req, res) => this.delete(req, res));

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response) {
        const users = await this.userService.getAll()
        res.status(200).json(users);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const user = await this.userService.getById(id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // omit tokens and password
        const { tokens, password, ...safeUser } = user;
        res.status(200).json(safeUser);
    }

    private async addFollow(req: Request, res: Response) {
        const token = req.cookies[TokenCookieName];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const selfUser = await this.userService.getById(payload._id);
        if (!selfUser) {
            res.status(404).json({ message: "Source user not found" });
            return;
        }
        const targetId = new Types.ObjectId(req.params.id);
        const targetUser = await this.userService.getById(targetId);
        if (!targetUser) {
            res.status(404).json({ message: "Target user not found" });
        }

        selfUser.following.push(targetId);
        this.userService.update(selfUser._id, selfUser);
        res.status(200).json(selfUser);
    }

    private async deleteFollow(req: Request, res: Response) {
        const token = req.cookies[TokenCookieName];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const selfUser = await this.userService.getById(payload._id);
        if (!selfUser) {
            res.status(404).json({ message: "Source user not found" });
            return;
        }

        const targetId = new Types.ObjectId(req.params.id);

        if (!selfUser.following.includes(targetId)) {
            res.status(404).json({ message: "This user is not following the target user" });
            return;
        }

        const index = selfUser.following.indexOf(targetId);
        selfUser.following.splice(index, 1);
        this.userService.update(selfUser._id, selfUser);
        res.status(200).json(selfUser);
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
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const user = await this.userService.getById(payload._id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // omit tokens and password


        //@ts-ignore
        const { tokens, password, ...safeUser } = user._doc;
        res.status(200).json(safeUser);
    }
}