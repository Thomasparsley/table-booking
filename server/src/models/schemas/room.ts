import { Schema } from 'mongoose';
import { IRoom } from '../../interfaces';

export const RoomSchema = new Schema<IRoom>({
    name: { type: String, required: true }
});
