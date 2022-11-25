import { Types } from "mongoose";
import { IFeature } from "./feature";

export interface IRoom {
    _id: Types.ObjectId;
    name: string;
    features: Types.ObjectId[];
}
