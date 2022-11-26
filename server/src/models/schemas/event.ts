import { Schema, Types } from "mongoose";
import { IEvent } from "../../interfaces";

export const EventSchema = new Schema<IEvent>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    occupiedRooms: { type: [Types.ObjectId], required: true },
    occupiedTables: { type: [Types.ObjectId], required: true }
});