import { Types } from "mongoose";

export interface IFeature {
    _id: Types.ObjectId;
    name: string;
    //If this feature is not a room feature, it is a table feature
    isRoomFeature: boolean;
}