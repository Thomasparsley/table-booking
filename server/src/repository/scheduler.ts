import { ISchedulerService, DateSpan } from "../services"
import { Types } from "mongoose";

export class SchedulerService implements ISchedulerService {
    canSchedule(id: Types.ObjectId, dateSpan: DateSpan): boolean {

    }

    schedule(id: Types.ObjectId, dateSpan: DateSpan): boolean {

    }

    getSchedules(id: Types.ObjectId): DateSpan[] {

    }
}