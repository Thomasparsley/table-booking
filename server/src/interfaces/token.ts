import { Types } from "mongoose";

export interface ITokenPayload {
    _id: Types.ObjectId;
    permissions: number;
    exp: number;
}