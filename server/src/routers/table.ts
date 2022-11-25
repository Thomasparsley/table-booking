import { Router, Request, Response } from "express";
import { IUserService } from "../services";

export class TableRouter {

    constructor(
        private readonly userService: IUserService,
    ) { }

    installRoutes(router: Router) {
        router.post("/", this.all);
        router.post("/:id", this.one);
    }

    private async all(req: Request, res: Response) {
        const users = await this.userService.getAll()

        res.status(200).json(users);
    }

    private async one(req: Request, res: Response) {
        const user = await this.userService.getById(req.params.id);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
    }
}