import { ISchedulerStoreService } from "../services";
import { Types } from "mongoose";
import { ISchedulerStore } from "../interfaces";
import { SchedulerStoreModel } from "../models";

export class SchedulerRepository implements ISchedulerStoreService {
    constructor(
        private readonly schedulerStoreModel: typeof SchedulerStoreModel,
    ) { }

    async getById(id: Types.ObjectId): Promise<ISchedulerStore | null> {
        return await this.schedulerStoreModel.findById(id);
    }

    async getByStoreId(id: Types.ObjectId): Promise<ISchedulerStore[]> {
        return await this.schedulerStoreModel.find({ storedId: id });
    }
}
