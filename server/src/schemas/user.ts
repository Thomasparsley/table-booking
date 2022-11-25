import { Schema, model } from 'mongoose';
import { randomBytes, pbkdf2Sync } from 'crypto';
import { env } from 'process';

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

userSchema.methods.generatePasswordHash = function (plainPassword: string): Promise<void> {
    return new Promise((resolve, reject) => {
        this.salt = randomBytes(+((process.env.SALT_LENGTH) ?? 64)).toString("hex");
        try {
            const key = pbkdf2Sync(plainPassword, this.salt, 100000, 512, 'sha512');
            this.passwordHash = key;
            resolve();
        }
        catch (err) {
            reject(err);
        }
    });
};

userSchema.methods.verifyPassword = async function (plainPassword: string): Promise<boolean> {

}



export enum UserPermissions {
    MANAGE_ROOMS = 1 << 1,
    MANAGE_TABLES = 1 << 2,
    SET_TABLE_FEATURES = 1 << 3,
    MANAGE_TABLE_FEATURES = 1 << 4
};

export const UserModel = model<IUser>("User", userSchema);
