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


export function decodeToken(token: string): Promise<ITokenPayload | null> {
    return new Promise(function (resolve, reject) {
        const decoded = jwt.decode(token, { complete: true });
        console.log(token);
        console.log(decoded);
        if (decoded) {
            resolve(decoded.payload as ITokenPayload);
        }
        reject("The token could not be decoded");
    });
}