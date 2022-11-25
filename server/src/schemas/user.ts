import { Schema, model, Model } from 'mongoose';
import { generateRandomSalt, generatePasswordHash } from '../helpers';

export interface IUser {
    //username: string;
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    salt: string;
    permissions?: number;
    tokens: string[];
};

type InternalUserModel = Model<IUser>;

const userSchema = new Schema<IUser>({
    //username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passwordHash: { type: String, required: true },
    salt: { type: String, required: true },
    permissions: { type: Number, required: false },
    tokens: { type: [String], required: true }
});

export const UserModel = model<IUser>("User", userSchema);

export enum UserPermissions {
    MANAGE_ROOMS = 1 << 0,
    MANAGE_TABLES = 1 << 1,
    SET_TABLE_FEATURES = 1 << 2,
    MANAGE_TABLE_FEATURES = 1 << 3,
    ALL = ~(~1 << 3)
};