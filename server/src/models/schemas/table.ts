import { Schema, model } from 'mongoose';
import { ITable } from '../../interfaces';

export const TableSchema = new Schema<ITable>({
    name: { type: String },
    seatCount: { type: Number, required: true },
    props: { type: [Object], required: true }
});
