import { IRoom } from "../interfaces";
import { Types } from "mongoose";
import { ISchedulerStore } from "../interfaces";

export type PartialSchedulerStore = {
    from: Date;
    to: Date;
    storedId: Types.ObjectId;
}

export interface ISchedulerStoreService {
    getById(id: Types.ObjectId): Promise<ISchedulerStore | null>;
    getByStoreId(id: Types.ObjectId): Promise<ISchedulerStore[]>;
    create(store: PartialSchedulerStore): Promise<ISchedulerStore>;
    delete(id: Types.ObjectId): Promise<ISchedulerStore | null>;
    getAllPendingSchedules(id: Types.ObjectId, from: Date): Promise<ISchedulerStore[] | null>;
    getAllOngoingSchedules(id: Types.ObjectId, from: Date, to: Date): Promise<ISchedulerStore[] | null>;
}