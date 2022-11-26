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

    async create(table: DtoNewTable, featuers: Types.ObjectId[] = []): Promise<ITable> {
        const newTable = new this.tableModel(table);
        newTable.features = featuers;
        return await newTable.save();
    }

    async createIfNotExists(table: DtoNewTable): Promise<ITable> {
        const existing = await this.tableModel.findOne({
            name: table.name,
            roomId: table.roomId,
        });

        if (existing) {
            return existing;
        }

        return await this.create(table);
    }


    async getAllForRoom(roomId: Types.ObjectId): Promise<ITable[]> {
        return await this.tableModel.find({ roomId: roomId });
    }

    async update(id: Types.ObjectId, user: DtoUpdateTable): Promise<ITable | null> {
        return await this.tableModel.findByIdAndUpdate(id, user, { new: false });
    }

    async delete(id: Types.ObjectId): Promise<ITable | null> {
        return await this.tableModel.findByIdAndDelete(id);
    }
}
