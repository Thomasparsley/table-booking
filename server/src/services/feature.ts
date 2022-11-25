import { IFeature } from "../interfaces";
import { DtoNewFeature, DtoUpdateFeature } from "../dtos";
import { Types } from "mongoose";

export interface IRoomService {
    getById(id: Types.ObjectId): Promise<IFeature | null>;
    getAll(): Promise<IFeature[]>;
    create(room: DtoNewFeature): Promise<IFeature>;
    update(id: Types.ObjectId, room: DtoUpdateFeature): Promise<IFeature | null>;
    delete(id: Types.ObjectId): Promise<IFeature | null>;
}
