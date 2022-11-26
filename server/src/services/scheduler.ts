import { Types } from "mongoose";
import { ITable, IRoom, IUser } from "../interfaces";
import { ISchedulerStore } from "../interfaces";
import { PartialSchedulerStore } from "./schedulerStore";

export interface ISchedulerService {
    getById(id: Types.ObjectId): Promise<ISchedulerStore | null>;
    canSchedule(id: Types.ObjectId, from: Date, to: Date): Promise<boolean>;
    schedule(id: Types.ObjectId, isRoom: boolean, from: Date, to: Date, user: Types.ObjectId): Promise<ISchedulerStore | null>;
    updateSchedule(id: Types.ObjectId, store: PartialSchedulerStore): Promise<ISchedulerStore | null>;
    deleteSchedule(id: Types.ObjectId): Promise<ISchedulerStore | null>;
    getSchedules(id: Types.ObjectId): Promise<{ from: Date, to: Date }[]>;
    getAllAvailableTables(from: Date, to: Date): Promise<ITable[]>;
    getAllAvailableRooms(from: Date, to: Date): Promise<IRoom[]>;
    /* getAllUnavailableRooms(from: Date, to: Date): Promise<IRoom[]>;
    getAllUnavailableTables(from: Date, to: Date): Promise<ITable[]>; */
}