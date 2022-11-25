import { Schema } from 'mongoose';

export interface IUser {
    username: String;
    email: String;
    firstName: String;
    lastName: String;
    passwordHash: String;
    salt: String;
    permissions: UserPermissions;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passwordHash: { type: String, required: true },
    salt: { type: String, required: true },
    permissions: { type: UserPermissions[], }
})

export enum UserPermissions {
    MANAGE_ROOMS = 1 << 1,
    MANAGE_TABLES = 1 << 2,
    SET_TABLE_FEATURES = 1 << 3,
    MANAGE_TABLE_FEATURES = 1 << 4
}