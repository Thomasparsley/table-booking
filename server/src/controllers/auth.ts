import { Express, Router, Request, Response } from "express";
import { IUserService } from "../services";
import { DtoLogin } from "../dtos/auth";
import {
    verifyPassword,
    generateToken,
    decodeToken,
} from "../helpers";
import { Controller } from "./controller";

const TokenCookieName = "token";

function expireFromNow(): Date {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 15);
    return now;
}

export class AuthController extends Controller {

    constructor(
        private readonly userService: IUserService,
        private readonly secretKey: string,
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        router.post("/login", (req, res) => {
            try {
                this.login(req, res)
            } catch (error) {
                console.error(error);
            }
        });
        router.post("/renew", (req, res) => {
            try {
                this.renew(req, res)
            } catch (error) {
                console.error(error);
            }
        });
        router.post("/validate", (req, res) => {
            try {
                this.validate(req, res)
            } catch (error) {
                console.error(error);
            }
        });
        router.post("/logout", (req, res) => {
            try {
                this.logout(req, res)
            } catch (error) {
                console.error(error);
            }
        });

        super.installRoutes(app, prefix, router);
    }

    private async login(req: Request, res: Response) {
        const loginInput: DtoLogin = req.body;

        const user = await this.userService.getByEmail(loginInput.email);
        if (!user) {
            res.status(405).json({ message: "Invalid email or password" });
            return;
        }

        // compare hashed password with the one in the database
        if (!(await verifyPassword(loginInput.password, user.password))) {
            res.status(405).json({ message: "Invalid email or password" });
            return;
        }

        // generate a token
        const token = await generateToken(
            user,
            expireFromNow().getTime(),
            this.secretKey,
        );

        // add token to repository
        await this.userService.addToken(user._id, token);

        // set token in cookie
        res.cookie("token", token, { expires: expireFromNow() });
        return res.status(200).end();
    }

    private async renew(req: Request, res: Response) {
        // get token from cookie
        const token = req.cookies[TokenCookieName];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const tokenPresent = await this.userService.isTokenPresent(payload._id, token);
        if (!tokenPresent) {
            res.status(405).json({
                message: "Could not find the user to which this token belongs.",
            });
            return;
        }

        const newToken = await generateToken(
            payload,
            expireFromNow().getTime(),
            this.secretKey,
        );

        await this.userService.addToken(payload._id, newToken);
        await this.userService.removeToken(payload._id, newToken);

        res.cookie(TokenCookieName, token, { expires: expireFromNow() });
        res.status(200);
    }

    private async validate(req: Request, res: Response) {
        // get token from cookie
        const token = req.cookies[TokenCookieName];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        const tokenPresent = await this.userService.isTokenPresent(payload._id, token);
        if (!tokenPresent) {
            res.status(405).json({
                message: "Could not find the user to which this token belongs.",
            });
            return;
        }

        res.status(200).end();
    }

    private async logout(req: Request, res: Response) {
        // get token from cookie
        const token = req.cookies[TokenCookieName];
        const payload = decodeToken(token);
        if (!payload) {
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        await this.userService.removeToken(payload._id, token);

        res.cookie(TokenCookieName, "", { expires: expireFromNow() });
        res.status(200)
    }
}