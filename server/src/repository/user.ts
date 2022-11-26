import { IUser, ISchedulerStore } from "../interfaces";
import { UserModel } from "../models";
import { DtoNewUser, DtoUpdateUser } from "../dtos";
import { IUserService } from "../services";
import { Types } from "mongoose";


export class UserRepository implements IUserService {
    constructor(
        private readonly userModel: typeof UserModel,
    ) { }

    async getById(id: Types.ObjectId): Promise<IUser | null> {
        return await this.userModel.findById(id);
    }

    async getByEmail(email: string): Promise<IUser | null> {
        return await this.userModel.findOne({ email: email });
    }

    async getAll(): Promise<IUser[]> {
        return await this.userModel.find();
    }

    async create(user: DtoNewUser): Promise<IUser> {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    async addToken(id: Types.ObjectId, token: string): Promise<void> {
        const user = await this.userModel.findByIdAndUpdate(id, {
            $push: {
                tokens: token
            }
        });
    }

    async removeToken(id: Types.ObjectId, token: string): Promise<boolean> {
        //TODO: Verify functionality
        const result = await this.userModel.findByIdAndUpdate(id, {
            $pull: {
                tokens: token
            }
        });
        return result != null;
    }

    async isTokenPresent(id: Types.ObjectId, token: string): Promise<boolean> {
        const user = await this.userModel.findById(id);
        if (!user) return false;
        //TODO: Verify functionality
        return user.tokens.includes(token);
    }

    async update(id: Types.ObjectId, user: DtoUpdateUser): Promise<IUser | null> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: false });
    }

    async delete(id: Types.ObjectId): Promise<IUser | null> {
        return await this.userModel.findByIdAndDelete(id);
    }

    async updateTokens(id: Types.ObjectId, tokens: string[]): Promise<void> {
        await this.userModel.findByIdAndUpdate(id, {
            tokens: tokens
        });
    }

    async getUserFollowing(id: Types.ObjectId): Promise<IUser[]> {
        return await this.userModel.find({ following: id });
    }

    async addSchedule(id: Types.ObjectId, scheduleId: Types.ObjectId): Promise<IUser | null> {
        return await this.userModel.findByIdAndUpdate(id, {
            $push: {
                upcomingMeetings: scheduleId
            }
        });
    }


    async sendScheduleDeletionById(user: IUser, schedule: ISchedulerStore): Promise<void> {
        user.notifications.push(`An administrator has deleted your meeting from ${schedule.from} to ${schedule.to}`);
    }

    async getNotifications(id: Types.ObjectId): Promise<string[]> {
        const user = await this.getById(id);
        if (!user) return [];
        return user.notifications;
    }

    async addNotification(id: Types.ObjectId, notification: string): Promise<void> {
        const user = await this.getById(id);
        if (!user) return;
        user.notifications.push(notification);

        this.userModel.findByIdAndUpdate(id, {
            notifications: user.notifications
        });
    }

    async removeNotification(id: Types.ObjectId, notification: string): Promise<boolean> {
        const user = await this.getById(id);
        if (!user) return false;

        const index = user.notifications.indexOf(notification);
        if (index < 0) return false;

        user.notifications.splice(index, 1);
        this.userModel.findByIdAndUpdate(id, {
            notifications: user.notifications
        });
        return true;
    }
}
