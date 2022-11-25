import { ITable } from "../interfaces";
import { TableModel } from "../models";
import { ITableService } from "../services";
import { DtoNewTable, DtoUpdateTable } from "../dtos";
import { Types } from "mongoose";


export class TableRepository implements ITableService {
    constructor(
        private readonly tableModel: typeof TableModel,
    ) { }

    async getById(id: Types.ObjectId): Promise<ITable | null> {
        return await this.tableModel.findById(id);
    }

    async getAll(): Promise<ITable[]> {
        return await this.tableModel.find();
    }

    async create(user: DtoNewTable): Promise<ITable> {
        const newUser = new this.tableModel(user);
        return await newUser.save();
    }

    async update(id: Types.ObjectId, user: DtoUpdateTable): Promise<ITable | null> {
        return await this.tableModel.findByIdAndUpdate(id, user, { new: false });
    }

    async delete(id: Types.ObjectId): Promise<ITable | null> {
        return await this.tableModel.findByIdAndDelete(id);
    }
}
