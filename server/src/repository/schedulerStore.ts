import { ISchedulerStoreService, PartialSchedulerStore } from "../services";
import { Types } from "mongoose";
import { ISchedulerStore } from "../interfaces";
import { SchedulerStoreModel } from "../models";

export class SchedulerStoreRepository implements ISchedulerStoreService {
    constructor(
        private readonly schedulerStoreModel: typeof SchedulerStoreModel,
    ) { }

    async getById(id: Types.ObjectId): Promise<ISchedulerStore | null> {
        return await this.schedulerStoreModel.findById(id);
    }

    async getByStoreId(id: Types.ObjectId): Promise<ISchedulerStore[]> {
        return await this.schedulerStoreModel.find({ storedId: id });
    }

    async create(store: PartialSchedulerStore): Promise<ISchedulerStore> {
        const newStore = new this.schedulerStoreModel(store);
        return await newStore.save();
    }

    async delete(id: Types.ObjectId): Promise<ISchedulerStore | null> {
        return await this.schedulerStoreModel.findByIdAndDelete(id);
    }

    async getAllPendingSchedules(id: Types.ObjectId, from: Date): Promise<ISchedulerStore[] | null> {
        return await this.schedulerStoreModel.find({
            storedId: id,
            from: {
                $lt: from
            },
            to: {
                $gt: from
            }
        });
    }

    async getAllOngoingSchedules(id: Types.ObjectId, from: Date, to: Date): Promise<ISchedulerStore[] | null> {
        return await this.schedulerStoreModel.find({
            storedId: id,
            from: {
                $gt: from,
                $lt: to
            }
        });
    }
}
