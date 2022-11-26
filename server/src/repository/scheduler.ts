import { ISchedulerService, ISchedulerStoreService, ITableService, IRoomService, PartialSchedulerStore } from "../services"
import { Types } from "mongoose";
import { ITable, IRoom, ISchedulerStore } from "../interfaces";

export class SchedulerService implements ISchedulerService {
    constructor(
        private schedulerStoreService: ISchedulerStoreService,
        private roomService: IRoomService,
        private tableService: ITableService
    ) { }
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

    async deleteSchedule(id: Types.ObjectId): Promise<ISchedulerStore | null> {
        return await this.schedulerStoreService.delete(id);
    }

    async updateSchedule(id: Types.ObjectId, store: PartialSchedulerStore): Promise<ISchedulerStore | null> {
        return this.schedulerStoreService.update(id, store);
    }

    async schedule(id: Types.ObjectId, isRoom: boolean, from: Date, to: Date, user: Types.ObjectId): Promise<ISchedulerStore | null> {
        if (!(await this.canSchedule(id, from, to))) {
            return null;
        }

        const store = await this.schedulerStoreService.create({
            from: from,
            storedId: id,
            to: to,
            isRoom: isRoom,
            user: user
        });

        return store;
    }

    async getSchedules(id: Types.ObjectId): Promise<{ from: Date; to: Date; }[]> {
        return this.schedulerStoreService.getByStoreId(id);
    }

    async getAllAvailableRooms(from: Date, to: Date): Promise<IRoom[]> {
        return await this.schedulerStoreService.getAllUnavailableRooms(from, to);
    }

    async getAllAvailableTables(from: Date, to: Date): Promise<ITable[]> {
        return await this.schedulerStoreService.getAllTableInRange(from, to);
    }

    async getAllUnavailableRooms(from: Date, to: Date): Promise<IRoom[]> {
        return await this.schedulerStoreService.getAllUnavailableRooms(from, to);
    }

    async getAllUnavailableTables(from: Date, to: Date): Promise<ITable[]> {
        return await this.schedulerStoreService.getAllUnavailableTables(from, to);
    }
}