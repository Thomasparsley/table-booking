import { Types } from "mongoose";
import { ISchedulerStore } from "../interfaces";

export interface IEvent {
    _id: Types.ObjectId;
    name: string;
    description: string;
    schedule: Types.ObjectId;
    occupiedRooms: Types.ObjectId[];
    occupiedTables: Types.ObjectId[];
}