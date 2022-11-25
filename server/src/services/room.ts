import { IRoom } from "../schemas"
import { DtoNewRoom, DtoUpdateRoom } from "../dtos";

export interface IRoomService {
    getById(id: string): Promise<IRoom | null>;
    getAll(): Promise<IRoom[]>;

    create(room: DtoNewRoom): Promise<IRoom>;
    update(id: string, room: DtoUpdateRoom): Promise<IRoom | null>;
    delete(id: string): Promise<boolean>;
}
