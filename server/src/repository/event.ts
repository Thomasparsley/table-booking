import { IEvent } from "../interfaces";
import { DtoNewEvent, DtoUpdateEvent } from "../dtos";
import { EventModel } from "../models";
import { IEventService } from "../services";
import { Types } from "mongoose";


export class EventRepository implements IEventService {
    constructor(
        private readonly eventModel: typeof EventModel,
    ) { }

    async getById(id: Types.ObjectId): Promise<IEvent | null> {
        return await this.eventModel.findById(id);
    }

    async getAll(): Promise<IEvent[]> {
        return await this.eventModel.find();
    }

    async create(event: DtoNewEvent): Promise<IEvent> {
        const newEvent = new this.eventModel(event);
        return await newEvent.save();
    }

    async update(id: Types.ObjectId, event: DtoUpdateEvent): Promise<IEvent | null> {
        return await this.eventModel.findByIdAndUpdate(id, event, { new: false });
    }

    async updateEvent(id: Types.ObjectId, event: IEvent): Promise<IEvent | null> {
        return await this.eventModel.findByIdAndUpdate(id, event, { new: false });
    }

    async delete(id: Types.ObjectId): Promise<IEvent | null> {
        return await this.eventModel.findByIdAndDelete(id);
    }

    async getAllFromDate(from: Date): Promise<IEvent[]> {
        return await this.eventModel.find({ date: { $gte: from } });
    }
}
