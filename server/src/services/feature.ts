import { IFeature } from "../interfaces";
import { DtoNewFeature, DtoUpdateFeature } from "../dtos";
import { Types } from "mongoose";

export interface IFeatureService {
    getById(id: Types.ObjectId, isRoomFeature: boolean): Promise<IFeature | null>;
    getAll(isRoomFeature: boolean): Promise<IFeature[]>;
    create(room: DtoNewFeature, isRoomFeature: boolean): Promise<IFeature>;
    update(id: Types.ObjectId, room: DtoUpdateFeature, isRoomFeature: boolean): Promise<IFeature | null>;
    delete(id: Types.ObjectId, isRoomFeature: boolean): Promise<IFeature | null>;
}
