import { Types } from "mongoose";

export interface ISchedulerService {
    canSchedule(id: Types.ObjectId, from: Date, to: Date): boolean;
    schedule(id: Types.ObjectId, from: Date, to: Date): boolean;
    getSchedules(id: Types.ObjectId): { from: Date, to: Date }[];
}