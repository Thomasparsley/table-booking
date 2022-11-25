import { model } from 'mongoose';
import { IFeature } from '../interfaces';
import { FeatureSchema } from './schemas';

export const FeatureModel = model<IFeature>("Feature", FeatureSchema);
