import { IUser, ISchedulerStore } from "../interfaces";
import { DtoNewUser, DtoUpdateUser } from "../dtos";
import { Types } from "mongoose";

export interface IUserService {
    getById(id: Types.ObjectId): Promise<IUser | null>;
    getByEmail(email: string): Promise<IUser | null>;
    getAll(): Promise<IUser[]>;
    addToken(id: Types.ObjectId, token: string): Promise<void>;
    removeToken(id: Types.ObjectId, token: string): Promise<boolean>;
    isTokenPresent(id: Types.ObjectId, token: string): Promise<boolean>;
    updateTokens(id: Types.ObjectId, tokens: string[]): Promise<void>;
    create(user: DtoNewUser): Promise<IUser>;
    update(id: Types.ObjectId, user: DtoUpdateUser): Promise<IUser | null>;
    delete(id: Types.ObjectId): Promise<IUser | null>;
    getUserFollowing(id: Types.ObjectId): Promise<IUser[]>;
    addSchedule(id: Types.ObjectId, scheduleId: Types.ObjectId): Promise<IUser | null>;


    sendScheduleDeletionById(user: IUser, schedule: ISchedulerStore): Promise<void>;

    // notfications
    getNotifications(id: Types.ObjectId): Promise<string[]>;
    addNotification(id: Types.ObjectId, notification: string): Promise<void>
    removeNotification(id: Types.ObjectId, notification: string): Promise<boolean>;
}
