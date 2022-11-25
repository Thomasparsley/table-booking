import jwt from "jsonwebtoken";
import { IUser, ITokenPayload } from "../interfaces";

export async function generateToken(user: IUser | ITokenPayload, expire: number, secretKey: string): Promise<string> {
    const payload: ITokenPayload = {
        _id: user._id,
        permissions: user.permissions,
        exp: expire,
    };

    return jwt.sign(payload, secretKey);
}

export async function verifyToken(token: string, secretKey: string): Promise<boolean> {
    const decoded = await decodeToken(token);
    if (decoded) {
        return true;
    }

    return false;
}


export async function decodeToken(token: string): Promise<ITokenPayload | null> {
    const decoded = jwt.decode(token, { complete: true });
    if (decoded) {
        return decoded.payload as ITokenPayload;
    }

    return null;
}