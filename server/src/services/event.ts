import { IEvent } from "../interfaces";
import { DtoNewEvent, DtoUpdateEvent } from "../dtos";
import { Types } from "mongoose";

export interface IEventService {
    getById(id: Types.ObjectId): Promise<IEvent | null>;
    getAll(): Promise<IEvent[]>;
    create(event: DtoNewEvent): Promise<IEvent>;
    update(id: Types.ObjectId, event: DtoUpdateEvent): Promise<IEvent | null>;
    delete(id: Types.ObjectId): Promise<IEvent | null>;
}
