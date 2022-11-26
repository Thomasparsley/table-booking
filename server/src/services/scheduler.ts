import { Types } from "mongoose";

export interface DateSpan {
    from: Date;
    to: Date;
}

export interface ISchedulerService {
    canSchedule(id: Types.ObjectId, dateSpan: DateSpan): boolean;
    schedule(id: Types.ObjectId, dateSpan: DateSpan): boolean;
    getSchedules(id: Types.ObjectId): DateSpan[];
}