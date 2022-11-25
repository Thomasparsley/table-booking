import { Schema, Types } from 'mongoose';
import { ITable } from '../../interfaces';

export const TableSchema = new Schema<ITable>({
    name: { type: String },
    seatCount: { type: Number, required: true },
    features: { type: [Types.ObjectId], required: true }
});
