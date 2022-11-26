import { Schema, Types } from 'mongoose';
import { ITable } from '../../interfaces';

export const TableSchema = new Schema<ITable>({
    name: { type: String, required: true },
    seatCount: { type: Number, required: true },
    roomId: { type: Schema.Types.ObjectId, required: true },
    features: { type: [String], required: true },
    blockedDays: { type: [String], required: true }
});
