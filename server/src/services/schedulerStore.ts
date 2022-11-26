import { IRoom, ITable, IUser } from "../interfaces";
import { Types } from "mongoose";
import { ISchedulerStore } from "../interfaces";

export type PartialSchedulerStore = {
    from: Date;
    to: Date;
    storedId: Types.ObjectId;
    user: Types.ObjectId;
    isRoom: boolean;
}

export interface ISchedulerStoreService {
    getById(id: Types.ObjectId): Promise<ISchedulerStore | null>;
    getByStoreId(id: Types.ObjectId): Promise<ISchedulerStore[]>;
    create(store: PartialSchedulerStore): Promise<ISchedulerStore>;
    update(id: Types.ObjectId, store: PartialSchedulerStore): Promise<ISchedulerStore | null>;
    delete(id: Types.ObjectId): Promise<ISchedulerStore | null>;
    getAllPendingSchedules(id: Types.ObjectId, from: Date): Promise<ISchedulerStore[] | null>;
    getAllOngoingSchedules(id: Types.ObjectId, from: Date, to: Date): Promise<ISchedulerStore[] | null>;
    getAllUnavailableTables(from: Date, to: Date): Promise<ITable[]>;
    getAllUnavailableRooms(from: Date, to: Date): Promise<IRoom[]>;
}
