import { model } from 'mongoose';
import { IRoom } from '../interfaces';
import { RoomSchema } from './schemas';

export const RoomModel = model<IRoom>("Room", RoomSchema);
