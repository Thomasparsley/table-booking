import { IRoom } from "../interfaces";
import { DtoNewRoom, DtoUpdateRoom } from "../dtos";
import { Types } from "mongoose";

export interface IRoomService {
    getById(id: Types.ObjectId): Promise<IRoom | null>;
    getAll(): Promise<IRoom[]>;
    create(room: DtoNewRoom): Promise<IRoom>;
    update(id: string, room: DtoUpdateRoom): Promise<IRoom | null>;
    delete(id: string): Promise<boolean>;
}
