import { Types } from "mongoose";
import { ITable, IRoom } from "../interfaces";

export interface ISchedulerService {
    canSchedule(id: Types.ObjectId, from: Date, to: Date): Promise<boolean>;
    schedule(id: Types.ObjectId, isRoom: boolean, from: Date, to: Date): Promise<boolean>;
    getSchedules(id: Types.ObjectId): Promise<{ from: Date, to: Date }[]>;
    getAllAvailableTables(from: Date, to: Date): Promise<ITable[]>;
    getAllAvailableRooms(from: Date, to: Date): Promise<IRoom[]>;
}