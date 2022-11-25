import { ITable, TableModel } from "../schemas";
import { DtoNewTable, DtoUpdateTable } from "../dtos";


export class TableRepository {
    constructor(
        private readonly tableModel: typeof TableModel,
    ) { }

    async getById(id: string): Promise<ITable | null> {
        return await this.tableModel.findOne({ _id: id });
    }

    async getAll(): Promise<ITable[]> {
        return await this.tableModel.find();
    }

    async create(user: DtoNewTable): Promise<ITable> {
        const newUser = new this.tableModel(user);
        return await newUser.save();
    }

    async update(id: string, user: DtoUpdateTable): Promise<ITable | null> {
        return await this.tableModel.findOneAndUpdate({ _id: id }, user, { new: false });
    }

    async delete(id: string): Promise<ITable | null> {
        return await this.tableModel.findOneAndDelete({ _id: id });
    }
}
