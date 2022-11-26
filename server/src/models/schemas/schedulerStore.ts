import { Schema, Types } from 'mongoose';
import { ISchedulerStore } from '../../interfaces'

export const SchedulerStoreSchema = new Schema<ISchedulerStore>({
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    storedId: { type: Schema.Types.ObjectId, required: true },
    isRoom: { type: Boolean, required: true },
    invitee: { type: Types.ObjectId, required: false },
    user: { type: Schema.Types.ObjectId, required: true }
});
