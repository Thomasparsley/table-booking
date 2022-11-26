import { Types } from "mongoose";

export interface ISchedulerStore {
    _id: Types.ObjectId;
    storedId: Types.ObjectId;
    isRoom: boolean;
    from: Date;
    to: Date;
}
