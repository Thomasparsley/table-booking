import { Types } from "mongoose";

export interface DtoNewEvent {
    fromDate: Date;
    toDate: Date;
    name: string;
    description: string;
}

export interface DtoUpdateEvent extends DtoNewEvent { }