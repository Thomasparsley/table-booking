import { Schema } from 'mongoose';
import { IFeature } from '../../interfaces';

export const FeatureSchema = new Schema<IFeature>({
    name: { type: String, required: true },
    isRoomFeature: { type: Boolean, required: true }
});
