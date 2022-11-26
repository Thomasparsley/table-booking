import { Schema, Types } from 'mongoose';
import { IUser } from '../../interfaces';

export const UserSchema = new Schema<IUser>({
    //username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    permissions: { type: Number, required: true },
    tokens: { type: [String], required: true },
    following: { type: [Types.ObjectId], required: true },
    notifications: { type: [String], require: true },
    upcomingMeetings: { type: [Schema.Types.ObjectId] }
});


