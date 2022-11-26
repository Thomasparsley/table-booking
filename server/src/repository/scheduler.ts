import { ISchedulerService, ISchedulerStoreService } from "../services"
import { Types } from "mongoose";

export class SchedulerService implements ISchedulerService {
    constructor(private schedulerStoreService: ISchedulerStoreService) { }
    canSchedule(id: Types.ObjectId, from: Date, to: Date): boolean {

        return false;
    }

    schedule(id: Types.ObjectId, from: Date, to: Date): boolean {
        if (!this.canSchedule(id, from, to)) {
            return false;
        }
        this.schedulerStoreService.create({
            from: from,
            to: to,
            storedId: id
        });
    }

    getSchedules(id: Types.ObjectId): { from: Date, to: Date }[] {


        return [];
    }
}