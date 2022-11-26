import { IRoom } from "../interfaces";
import { Types } from "mongoose";
import { ISchedulerStore } from "../interfaces";

export interface ISchedulerStoreService {
    getById(id: Types.ObjectId): Promise<ISchedulerStore | null>;
    getByStoreId(id: Types.ObjectId): Promise<ISchedulerStore[]>;
    create(store: ISchedulerStore): Promise<ISchedulerStore>;
    delete(id: Types.ObjectId): Promise<ISchedulerStore | null>;
}
