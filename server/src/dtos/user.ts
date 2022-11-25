import { Types } from "mongoose";

export interface DtoNewUser {
    email: string;
    password: string;
}

export interface DtoUpdateUser extends DtoNewUser {
    phone: string;
    avatar: string;
    following: Types.ObjectId[];
}
