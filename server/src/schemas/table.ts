import { Schema, model } from 'mongoose';

export interface ITable {
    name?: string,
    seatCount: number,
    roomId: number,
    props: any[]
}

const tableSchema = new Schema<ITable>({
    name: { type: String },
    seatCount: { type: Number, required: true },
    props: { type: [any], required: true }
});

export const TableModel = model<ITable>("Table", tableSchema);