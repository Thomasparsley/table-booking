import { TableModel, ITable } from "../schemas";

export class TableRepository {
    constructor(
        private readonly tableModel: typeof TableModel,
    ) { }

    async getById(id: string): Promise<ITable> {
        return await this.tableModel.findOne({ _id: id });
    }

    async getAll(): Promise<ITable[]> {
        return await this.tableModel.find();
    }
}
