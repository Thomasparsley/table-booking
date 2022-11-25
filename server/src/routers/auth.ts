import { Router, Request, Response } from "express";
import { IUserService } from "../services";

export class AuthRouter {

    constructor(
        private readonly userService: IUserService,
    ) { }

    installRoutes(router: Router) {
        router.post("/login", this.login);
        router.post("/renew", this.renew);
        router.post("/validate", this.validate);
        router.post("/logout", this.logout);
    }

    private async login(req: Request, res: Response) {
        // TODO:
        const id = "";

        const user = await this.userService.getById(id);

        if (!user) {
        }

        res.status(200)
            .json([
                {}
            ]);
    }

    private async renew(req: Request, res: Response) {
        res.status(200)
            .json([
                {}
            ]);
    }

    private async validate(req: Request, res: Response) {
        res.status(200)
            .json([
                {}
            ]);
    }

    private async logout(req: Request, res: Response) {
        res.status(200)
            .json([
                {}
            ]);
    }
}