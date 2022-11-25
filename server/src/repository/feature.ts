import { IFeature } from "../interfaces";
import { FeatureModel } from "../models";
import { IFeatureService } from "../services";
import { DtoNewFeature, DtoUpdateFeature } from "../dtos";
import { Types } from "mongoose";


export class FeatureRepository implements IFeatureService {
    constructor(
        private readonly featureModel: typeof FeatureModel,
    ) { }

    async getById(id: Types.ObjectId, isRoomFeature: boolean): Promise<IFeature | null> {
        const feature = await this.featureModel.find({ _id: id, isRoomFeature: isRoomFeature });
        return feature ? feature[0] : null;
    }

    async getAll(isRoomFeature: boolean): Promise<IFeature[]> {
        return await this.featureModel.find({ isRoomFeature: isRoomFeature });
    }

    async create(feature: DtoNewFeature): Promise<IFeature> {
        const newFeature = new this.featureModel(feature);
        return await newFeature.save();
    }

    async update(id: Types.ObjectId, feature: DtoUpdateFeature): Promise<IFeature | null> {
        return await this.featureModel.findByIdAndUpdate(id, feature, { new: false });
    }

    async delete(id: Types.ObjectId): Promise<IFeature | null> {
        return await this.featureModel.findByIdAndDelete(id);
    }
}
