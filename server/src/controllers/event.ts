import { Express, Router, Request, Response } from "express";
import { IEventService, ISchedulerService, IRoomService, ITableService } from "../services";
import { Types } from "mongoose";
import { Controller } from "./controller";
import { authorizedMaker } from "../middleware/auth";
import { IRoom, ITable } from "../interfaces";


const authorized = authorizedMaker();



export class EventController extends Controller {

    constructor(
        private readonly eventService: IEventService,
        private readonly roomService: IRoomService,
        private readonly tableService: ITableService,
        private readonly schedulerService: ISchedulerService
    ) {
        super();
    }

    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        router.get("/", authorized, (req, res) => {
            try {
                this.all(req, res)
            } catch (error) {
                console.error(error);
            }
        });
        router.get("/next", authorized, (req, res) => {
            try {
                this.next(req, res)
            } catch (error) {
                console.error(error);
            }
        });
        router.get("/:id", authorized, (req, res) => {
            try {
                this.one(req, res)
            } catch (error) {
                console.error(error);
            }
        });


        router.post("/", authorized, (req, res) => {
            try {
                this.create(req, res)
            } catch (error) {
                console.error(error);
            }
        });
        router.put("/:id", authorized, (req, res) => {
            try {
                this.update(req, res)
            } catch (error) {
                console.error(error);
            }
        });
        router.delete("/:id", authorized, (req, res) => {
            try {
                this.delete(req, res)
            } catch (error) {
                console.error(error);
            }
        });

        super.installRoutes(app, prefix, router);
    }

    private async all(req: Request, res: Response) {
        const events = await this.eventService.getAll();

        const expandedEvents = [];
        for (const event of events) {
            const rooms: IRoom[] = [];
            const tables: any[] = [];
            for (const roomId of event.occupiedRooms) {
                const room = await this.roomService.getById(roomId);
                if (room != null) {
                    rooms.push(room);
                }
            }
            for (const tableId of event.occupiedTables) {
                const table = await this.tableService.getById(tableId);
                if (table != null) {
                    const room = await this.roomService.getById(table.roomId);
                    tables.push({
                        _id: table._id,
                        blockedDays: table.blockedDays,
                        features: table.features,
                        name: table.name,
                        roomId: table.roomId,
                        seatCount: table.seatCount,
                        room: room
                    });
                }
            }

            const schedule = await this.schedulerService.getById(event.schedule);

            expandedEvents.push({
                _id: event._id,
                name: event.name,
                schedule: event.schedule,
                occupiedRooms: event.occupiedRooms,
                occupiedTables: event.occupiedTables,
                rooms: rooms,
                tables: tables
            });
        }


        res.status(200).json(expandedEvents);
    }

    private async next(req: Request, res: Response) {
        const fromRaw = req.query.from;
        const from = fromRaw ? new Date(fromRaw as string) : new Date();

        const events = await this.eventService.getAllFromDate(from);
        const expandedEvents = [];
        for (const event of events) {
            const rooms: IRoom[] = [];
            const tables: ITable[] = [];
            for (const roomId of event.occupiedRooms) {
                const room = await this.roomService.getById(roomId);
                if (room != null) {
                    rooms.push(room);
                }
            }
            for (const tableId of event.occupiedTables) {
                const table = await this.tableService.getById(tableId);
                if (table != null) {
                    tables.push(table);
                }
            }

            expandedEvents.push({
                _id: event._id,
                name: event.name,
                occupiedRooms: event.occupiedRooms,
                occupiedTables: event.occupiedTables,
                rooms: rooms,
                tables: tables
            });
        }

        res.status(200).json(expandedEvents);
    }

    private async one(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const event = await this.eventService.getById(id);
        if (event == null) {
            res.status(404).json({ message: "The event could not be found" });
            return;
        }
        const rooms: IRoom[] = [];
        const tables: ITable[] = [];
        for (const roomId of event.occupiedRooms) {
            const room = await this.roomService.getById(roomId);
            if (room != null) {
                rooms.push(room);
            }
        }
        for (const tableId of event.occupiedTables) {
            const table = await this.tableService.getById(tableId);
            if (table != null) {
                tables.push(table);
            }
        }

        const expandedEvent = {
            _id: event._id,
            name: event.name,
            occupiedRooms: event.occupiedRooms,
            occupiedTables: event.occupiedTables,
            rooms: rooms,
            tables: tables
        };

        res.status(200).json(expandedEvent);
    }

    private async create(req: Request, res: Response) {
        const event = await this.eventService.create(req.body);
        res.status(200).json(event);
    }

    private async update(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const event = await this.eventService.update(id, req.body);

        if (!event) {
            res.status(404).json({ message: "Event not found" });
            return;
        }

        res.status(200).json(event);
    }

    private async delete(req: Request, res: Response) {
        const id = new Types.ObjectId(req.params.id);
        const event = await this.eventService.delete(id);

        if (!event) {
            res.status(404).json({ message: "Event not found" });
            return;
        }

        res.status(200).json(event);
    }
}