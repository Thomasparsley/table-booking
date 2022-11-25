import { Schema, model } from 'mongoose';
import { env } from 'process';
import { generateRandomSalt, generatePasswordHash } from '../../helpers/PasswordHelpers';

export interface IUser {
    username: String;
    email: String;
    firstName: String;
    lastName: String;
    passwordHash: String;
    salt: String;
    permissions?: Number;
};

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    passwordHash: { type: String, required: true },
    salt: { type: String, required: true },
    permissions: { type: Number, required: false }
});

userSchema.methods.generatePasswordHash = async function (plainPassword: string): Promise<void> {
    this.salt = await generateRandomSalt();
    this.passwordHash = await generatePasswordHash(plainPassword, this.salt);
};

userSchema.methods.verifyPassword = async function (plainPassword: string): Promise<boolean> {
    const savedPasswordHash: string = this.passwordHash;
    const providedPasswordHash = await generatePasswordHash(plainPassword, this.salt);
    return savedPasswordHash === providedPasswordHash;
};

export enum UserPermissions {
    MANAGE_ROOMS = 1 << 1,
    MANAGE_TABLES = 1 << 2,
    SET_TABLE_FEATURES = 1 << 3,
    MANAGE_TABLE_FEATURES = 1 << 4,
    ALL = ~(0 << 4)
};

export const UserModel = model<IUser>("User", userSchema);
