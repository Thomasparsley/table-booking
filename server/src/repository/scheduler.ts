import { ISchedulerService, ISchedulerStoreService } from "../services"
import { Types } from "mongoose";

export class SchedulerService implements ISchedulerService {
    constructor(private schedulerStoreService: ISchedulerStoreService) { }
    async canSchedule(id: Types.ObjectId, from: Date, to: Date): Promise<boolean> {
        const pending = await this.schedulerStoreService.getAllPendingSchedules(id, from);
        if (pending && pending.length > 0) {
            return false;
        }
        const ongoing = await this.schedulerStoreService.getAllOngoingSchedules(id, from, to);
        if (ongoing && ongoing.length > 0) {
            return false;
        }
        return true;
    }

    async schedule(id: Types.ObjectId, from: Date, to: Date): Promise<boolean> {
        if (!this.canSchedule(id, from, to)) {
            return false;
        }
        const schedule = await this.schedulerStoreService.create({
            from: from,
            to: to,
            storedId: id
        });

        console.log(schedule);

        return true;
    }

    async getSchedules(id: Types.ObjectId): Promise<{ from: Date, to: Date }[]> {
        const schedules = await this.schedulerStoreService.getByStoreId(id);
        let extracedStore: { from: Date, to: Date }[] = [];
        for (const schedule of schedules) {
            extracedStore.push({
                from: schedule.from,
                to: schedule.to
            });
        }
        return extracedStore;
    }
}