import { model } from "mongoose";
import { ISchedulerStore } from "../interfaces"
import { SchedulerStoreSchema } from "./schemas";

export const SchedulerStoreModel = model<ISchedulerStore>("SchedulerStore", SchedulerStoreSchema);