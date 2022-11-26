import { IRoom } from "../interfaces";
import { RoomModel } from "../models";
import { IRoomService } from "../services";
import { DtoNewRoom, DtoUpdateRoom } from "../dtos";
import { Types } from "mongoose";

export class RoomRepository implements IRoomService {
    constructor(
        private readonly roomModel: typeof RoomModel,
    ) { }

    async getById(id: Types.ObjectId): Promise<IRoom | null> {
        return await this.roomModel.findById(id);
    }

    async getAll(): Promise<IRoom[]> {
        return await this.roomModel.find();
    }

    async create(user: DtoNewRoom): Promise<IRoom> {
        const newUser = new this.roomModel(user);
        return await newUser.save();
    }

    async update(id: Types.ObjectId, room: DtoUpdateRoom): Promise<IRoom | null> {
        return await this.roomModel.findByIdAndUpdate(id, room, { new: false });
    }

    async delete(id: Types.ObjectId): Promise<IRoom | null> {
        return await this.roomModel.findByIdAndDelete(id);
    }
}
