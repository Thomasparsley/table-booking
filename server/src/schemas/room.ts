import { Schema, model } from 'mongoose';

export interface IRoom {
    name: string //TODO: Add more room properties
}

const roomSchema = new Schema<IRoom>({
    name: { type: String, required: true }
});

export const RoomModel = model<IRoom>("Room", roomSchema);