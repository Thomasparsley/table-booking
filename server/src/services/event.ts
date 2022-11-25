import { IEvent } from "../interfaces";
import { DtoNewRoom, DtoUpdateRoom } from "../dtos";
import { Types } from "mongoose";

export interface IRoomService {
    getById(id: Types.ObjectId): Promise<IEvent | null>;
    getAll(): Promise<IEvent[]>;
    create(room: DtoNewRoom): Promise<IEvent>;
    update(id: Types.ObjectId, room: DtoUpdateRoom): Promise<IEvent | null>;
    delete(id: Types.ObjectId): Promise<IEvent | null>;
}
