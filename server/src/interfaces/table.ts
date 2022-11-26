import { Types } from "mongoose";

export interface ITable {
    _id: Types.ObjectId;
    name: string;
    seatCount: number;
    roomId: Types.ObjectId;
    features: string[];
    blockedDays: string[];
}
