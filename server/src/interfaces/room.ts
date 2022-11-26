import { Types } from "mongoose";

export interface IRoom {
    _id: Types.ObjectId;
    name: string;
    place: string;
    description: string;
    features: string[];
}
