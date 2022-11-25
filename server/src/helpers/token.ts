import jwt from "jsonwebtoken";
import { IUser, ITokenPayload } from "../interfaces";

export function generateToken(user: IUser | ITokenPayload, expire: number, secretKey: string): Promise<string> {
    const payload: ITokenPayload = {
        _id: user._id,
        permissions: user.permissions,
        exp: expire,
    };

    return new Promise(function (resolve, reject) {
        jwt.sign(payload, secretKey, {}, (error, encoded) => {
            if (error) {
                reject(error);
            }
            else if (encoded == undefined) {
                reject("The encoded value is undefined");
            }
            else {
                resolve(encoded);
            }
        });
    });
}

export async function verifyToken(token: string, secretKey: string): Promise<boolean> {
    const decoded = await decodeToken(token);
    if (decoded) {
        return true;
    }

    return false;
}


export function decodeToken(token: string): ITokenPayload | null {
    const decoded = jwt.decode(token, { complete: true });
    if (decoded) {
        return decoded.payload as ITokenPayload;
    }

    return null;
}