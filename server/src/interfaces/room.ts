import { Types } from "mongoose";

export interface IRoom {
    _id: Types.ObjectId,
    name: string //TODO: Add more room properties
}
