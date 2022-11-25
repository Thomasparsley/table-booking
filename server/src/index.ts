import express, { Express } from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import logger from "express-requests-logger";
import { Types } from "mongoose";
import { generatePasswordHash } from "./helpers";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import {
    RoomModel,
    TableModel,
    UserModel
} from "./models"
import {
    AuthController,
    RoomController,
    TableController,
    UserController,
} from "./controllers";
import {
    RoomRepository,
    TableRepository,
    UserRepository,
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
app.use(function (req, res, next) {
    /*console.log(req.params);
    console.log(req.body);
    console.log(req.headers);*/
    next();
});

const superSecretKey = "sdadsa";

const roomRepository = new RoomRepository(RoomModel);
const tableRepository = new TableRepository(TableModel);
const userRepository = new UserRepository(UserModel);

const authController = new AuthController(userRepository, superSecretKey);
const roomController = new RoomController(roomRepository);
const tableController = new TableController(tableRepository);
const userController = new UserController(userRepository);

authController.installRoutes(app, "/api/auth");
roomController.installRoutes(app, "/api/room");
tableController.installRoutes(app, "/api/table");
userController.installRoutes(app, "/api/user");

app.get("/ping", function (_, res) {
    res.status(200).write("Pong!");
});

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
}

main()*/