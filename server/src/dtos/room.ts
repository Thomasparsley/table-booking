import { Types } from "mongoose";

export interface DtoNewRoom {
    name: string;
    place: string;
    description: string;
}

export interface DtoUpdateRoom extends DtoNewRoom {

}
