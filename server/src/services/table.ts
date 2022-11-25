import { ITable } from "../interfaces";
import { DtoNewTable, DtoUpdateTable } from "../dtos";

export interface ITableService {
    getById(id: string): Promise<ITable | null>;
    getAll(): Promise<ITable[]>;
    create(table: DtoNewTable): Promise<ITable>;
    update(id: string, table: DtoUpdateTable): Promise<ITable | null>;
    delete(id: string): Promise<boolean>;
}
