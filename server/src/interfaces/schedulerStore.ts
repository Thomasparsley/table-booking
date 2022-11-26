import { Types } from "mongoose";

export interface ISchedulerStore {
    _id: Types.ObjectId;
    storedId: Types.ObjectId;
    from: Date;
    to: Date;
}
