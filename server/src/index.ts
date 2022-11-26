import express, { Express } from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import logger from "express-requests-logger";
import { Types } from "mongoose";
import { generatePasswordHash } from "./helpers";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { CronJob } from "cron";
import { verifyToken } from "./helpers";

import {
    RoomModel,
    TableModel,
    UserModel,
    FeatureModel,
    SchedulerStoreModel
} from "./models"
import {
    AuthController,
    RoomController,
    TableController,
    UserController,
    FeatureController
} from "./controllers";
import {
    RoomRepository,
    TableRepository,
    UserRepository,
    FeatureRepository,
    SchedulerService,
    SchedulerStoreRepository
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

const roomRepository = new RoomRepository(RoomModel);
const tableRepository = new TableRepository(TableModel);
const userRepository = new UserRepository(UserModel);
const featureRepository = new FeatureRepository(FeatureModel);
const schedulerRepository = new SchedulerStoreRepository(SchedulerStoreModel);

const authController = new AuthController(userRepository, superSecretKey);
const roomController = new RoomController(roomRepository, tableRepository);
const tableController = new TableController(tableRepository, roomRepository);
const userController = new UserController(userRepository);
const featureController = new FeatureController(featureRepository);
const scheduler = new SchedulerService(schedulerRepository);

authController.installRoutes(app, "/api/auth");
roomController.installRoutes(app, "/api/rooms");
tableController.installRoutes(app, "/api/tables");
userController.installRoutes(app, "/api/users");
featureController.installRoutes(app, "/api/features");

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


/*async function main() {
    const user = new UserModel({
        _id: new Types.ObjectId("123456789999"),
        email: "test@test.com",
        firstName: "Test1",
        lastName: "Test2",
        following: [],
        password: await generatePasswordHash("12345"),
        permissions: 0,
        tokens: []
    });
    user.save();
    const user2 = new UserModel({
        _id: new Types.ObjectId("123456789998"),
        email: "test2@test.com",
        firstName: "Tester1",
        lastName: "Tester2",
        following: [],
        password: await generatePasswordHash("12345"),
        permission: 0,
        tokens: []
    });
    user2.save();
}*/
/*async function featureFill() {
    const feature = new FeatureModel({
        isRoomFeature: false,
        name: "Dokovaci stanice"
    });
    feature.save();
    const feature2 = new FeatureModel({
        isRoomFeature: false,
        name: "Zasuvka"
    });
    feature2.save();
    const feature3 = new FeatureModel({
        isRoomFeature: true,
        name: "Projektor"
    });
    feature3.save();
}

featureFill();*/
/*main()*/

async function testScheduler() {
    const id = new Types.ObjectId("abcdefghijkl");
    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(targetDate.getDate() + 6);
    console.log(await scheduler.canSchedule(id, today, targetDate));
    await scheduler.schedule(id, today, targetDate);

    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + 1);
    const prevDate = new Date(targetDate);
    prevDate.setDate(prevDate.getDate() - 1);
    console.log(await scheduler.canSchedule(id, nextDate, prevDate));
}

testScheduler();