import { Schema, Types } from 'mongoose';
import { IRoom } from '../../interfaces';

export const RoomSchema = new Schema<IRoom>({
    name: { type: String, required: true },
    place: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [String], required: true }
});
