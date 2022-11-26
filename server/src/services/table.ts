import { ITable } from "../interfaces";
import { DtoNewTable, DtoUpdateTable } from "../dtos";
import { Types } from "mongoose";

type NewTable = Omit<DtoNewTable, "features">


export interface ITableService {
    getById(id: Types.ObjectId): Promise<ITable | null>;
    getAll(): Promise<ITable[]>;
    getAllForRoom(roomId: Types.ObjectId): Promise<ITable[]>;
    create(table: NewTable, featuers: Types.ObjectId[]): Promise<ITable>;
    createIfNotExists(table: NewTable): Promise<ITable>;
    update(id: Types.ObjectId, table: DtoUpdateTable): Promise<ITable | null>;
    delete(id: Types.ObjectId): Promise<ITable | null>;
}
