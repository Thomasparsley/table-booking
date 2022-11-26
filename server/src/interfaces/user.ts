import { Types } from "mongoose";

export interface IUser {
    //username: string;
    _id: Types.ObjectId,
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    permissions: number;
    tokens: string[];
    phone: string;
    avatar: string;
    following: Types.ObjectId[];
}
