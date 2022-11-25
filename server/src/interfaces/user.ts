import { Schema } from "mongoose";

export interface IUser {
    //username: string;
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    salt: string;
    permissions?: number;
    tokens: string[];
    following: Schema.Types.ObjectId[];
}
