import { model } from 'mongoose';
import { ITable } from '../interfaces';
import { TableSchema } from './schemas';

export const TableModel = model<ITable>("Table", TableSchema);
