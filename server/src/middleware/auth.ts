import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../helpers";

const TokenCookieName = "token";


export function authorizedMaker(secretKey: string) {
    return function (
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        const token = req.cookies[TokenCookieName];
        const tokenPayload = decodeToken(token);
        if (tokenPayload) {
            // @ts-ignore
            req.context = {
                userId: tokenPayload._id,
            };
        }

        next();
    }
}