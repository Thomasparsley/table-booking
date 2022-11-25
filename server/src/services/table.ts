export interface ITableService {
    getById(id: string): Promise<ITable>;
    getAll(): Promise<ITable[]>;
}
