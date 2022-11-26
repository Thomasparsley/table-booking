import { Types } from "mongoose";

export interface ISchedulerService {
    canSchedule(id: Types.ObjectId, from: Date, to: Date): Promise<boolean>;
    schedule(id: Types.ObjectId, from: Date, to: Date): Promise<boolean>;
    getSchedules(id: Types.ObjectId): Promise<{ from: Date, to: Date }[]>;
}