import { model } from 'mongoose';
import { IUser } from '../interfaces';
import { UserSchema } from './schemas';

export const UserModel = model<IUser>("User", UserSchema);
