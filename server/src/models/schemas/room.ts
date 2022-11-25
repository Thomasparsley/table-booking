import { Schema, Types } from 'mongoose';
import { IRoom } from '../../interfaces';

export const RoomSchema = new Schema<IRoom>({
    name: { type: String, required: true },
    features: { type: [Types.ObjectId], required: true }
});
