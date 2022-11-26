import { ISchedulerService, ISchedulerStoreService } from "../services"
import { Types } from "mongoose";
import { ITable, IRoom } from "../interfaces";

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

    async getAllAvailableTables(from: Date, to: Date): Promise<ITable[]> {
        return [];
        /*const tables = await this.schedulerStoreService.getAllAvailableTables(from, to) as ITable[];
        const rooms = await this.schedulerStoreService.getAllAvailableRooms(from, to);
        tables.filter(table => {
            rooms.includes(table.roomId);
        });*/
    }

    async getAllAvailableRooms(from: Date, to: Date): Promise<IRoom[]> {
        return [];
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

    async getAllAvailableTableReservations(from: Date, to: Date, isTable: boolean): Promise<ITable[]> {

        return [];
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