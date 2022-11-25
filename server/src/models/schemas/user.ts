import { Schema } from 'mongoose';
import { IUser } from '../../interfaces';

export const UserSchema = new Schema<IUser>({
    //username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passwordHash: { type: String, required: true },
    salt: { type: String, required: true },
    permissions: { type: Number, required: false },
    tokens: { type: [String], required: true },
    following: { type: [Schema.Types.ObjectId], required: true }
});

export enum UserPermissions {
    MANAGE_ROOMS = 1 << 0,
    MANAGE_TABLES = 1 << 1,
    SET_TABLE_FEATURES = 1 << 2,
    MANAGE_TABLE_FEATURES = 1 << 3,
    ALL = ~(~1 << 3)
}
