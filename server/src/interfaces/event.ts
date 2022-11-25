import { Types } from "mongoose";

export interface IEvent {
    _id: Types.ObjectId,
    name: string,
    occupiedRooms: Types.ObjectId[],
    occupiedTables: Types.ObjectId[]
}