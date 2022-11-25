import { ITable } from "../interfaces";
import { DtoNewTable, DtoUpdateTable } from "../dtos";
import { Types } from "mongoose";

export interface ITableService {
    getById(id: Types.ObjectId): Promise<ITable | null>;
    getAll(): Promise<ITable[]>;
    create(table: DtoNewTable): Promise<ITable>;
    update(id: Types.ObjectId, table: DtoUpdateTable): Promise<ITable | null>;
    delete(id: Types.ObjectId): Promise<ITable | null>;
}
