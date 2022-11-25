import { IRoom } from "../interfaces";
import { RoomModel } from "../models";
import { DtoNewRoom, DtoUpdateRoom } from "../dtos";


export class RoomRepository {
    constructor(
        private readonly roomModel: typeof RoomModel,
    ) { }

    async getById(id: string): Promise<IRoom | null> {
        return await this.roomModel.findOne({ _id: id });
    }

    async getAll(): Promise<IRoom[]> {
        return await this.roomModel.find();
    }

    async create(user: DtoNewRoom): Promise<IRoom> {
        const newUser = new this.roomModel(user);
        return await newUser.save();
    }

    async update(id: string, user: DtoUpdateRoom): Promise<IRoom | null> {
        return await this.roomModel.findOneAndUpdate({ _id: id }, user, { new: false });
    }

    async delete(id: string): Promise<IRoom | null> {
        return await this.roomModel.findOneAndDelete({ _id: id });
    }
}
