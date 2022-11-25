import { Router, Request, Response } from "express";
import { IUserService } from "../services";
import { Types } from "mongoose";

export class UserController {

    constructor(
        private readonly userService: IUserService,
    ) { }

    installRoutes(router: Router) {
        router.get("/", this.all);
        router.get("/:id", this.one);

        router.post("/", this.create);
        router.put("/:id", this.update);
        router.delete("/:id", this.delete);
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

        res.status(200).json(user);
    }

    private async create(req: Request, res: Response) {
        const user = await this.userService.create(req.body);
        res.status(200).json(user);
    }

    private async update(req: Request, res: Response) {
        const user = await this.userService.update(req.params.id, req.body);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }

    private async delete(req: Request, res: Response) {
        const user = await this.userService.delete(req.params.id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }
}