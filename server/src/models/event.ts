import { model } from "mongoose";
import { IEvent } from "../interfaces";
import { EventSchema } from "./schemas/event";

export const EventModel = model<IEvent>("Event", EventSchema);