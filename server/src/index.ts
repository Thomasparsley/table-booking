import express, { Express } from "express";
import mongoose, { Types } from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { CronJob } from "cron";
import { verifyToken } from "./helpers";

import {
    RoomModel,
    TableModel,
    UserModel,
    FeatureModel,
    SchedulerStoreModel,
    EventModel,
} from "./models"
import {
    AuthController,
    RoomController,
    TableController,
    UserController,
    FeatureController,
    EventController,
    SchedulerController
} from "./controllers";
import {
    RoomRepository,
    TableRepository,
    UserRepository,
    FeatureRepository,
    SchedulerService,
    SchedulerStoreRepository,
    EventRepository,
} from "./repository";



mongoose.connect("mongodb://127.0.0.1:27016/tablebooking");

const app: Express = express();

app.use(cors({
    origin: [
        "http://localhost:3000/",
        "http://localhost:3000",
        "localhost:3000",
        "localhost:3000/",
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000",
        "127.0.0.1:3000",
        "127.0.0.1:3000/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(helmet());

const superSecretKey = "sdadsa";

const schedulerRepository = new SchedulerStoreRepository(SchedulerStoreModel);

const roomRepository = new RoomRepository(RoomModel);
const tableRepository = new TableRepository(TableModel);
const userRepository = new UserRepository(UserModel);
const featureRepository = new FeatureRepository(FeatureModel);
const eventRepository = new EventRepository(EventModel);

const schedulerServices = new SchedulerService(
    schedulerRepository,
    roomRepository,
    tableRepository,
);

const schedulerController = new SchedulerController(tableRepository, schedulerServices, roomRepository, userRepository, SchedulerStoreModel, eventRepository);
const authController = new AuthController(userRepository, superSecretKey);
const roomController = new RoomController(roomRepository, tableRepository);
const tableController = new TableController(tableRepository, roomRepository);
const userController = new UserController(userRepository);
const featureController = new FeatureController(featureRepository);
const eventController = new EventController(eventRepository, roomRepository, tableRepository, schedulerServices);

authController.installRoutes(app, "/api/auth");
roomController.installRoutes(app, "/api/rooms");
tableController.installRoutes(app, "/api/tables");
userController.installRoutes(app, "/api/users");
featureController.installRoutes(app, "/api/features");
eventController.installRoutes(app, "/api/events");
schedulerController.installRoutes(app, "/api/scheduler");

app.get("/ping", function (_, res) {
    res.status(200).write("Pong!");
});


// Remove all expired tokens every 5 minutes
const TokenRemoverJob = new CronJob("0 */5 * * * *", async function () {
    const users = await userRepository.getAll();

    users.forEach(async (user) => {
        const tokens = user.tokens

        tokens.filter(async (token) => {
            const valid = await verifyToken(token, superSecretKey);
            return valid;
        })

        await userRepository.updateTokens(user._id, tokens);
    });
});
TokenRemoverJob.start();

let port: Number;
if (process.env.IS_PRODUCTION) {
    port = 3000;
} else {
    port = 4000;
}

app.listen(port, () => console.log("Listening"));
