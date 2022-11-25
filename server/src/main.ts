import express, { Express } from "express";
import { initializePassport } from "./helpers";
import { expressjwt, ExpressJwtRequest } from "express-jwt";

import {
    AuthController,
    RoomController,
    TableController,
    UserController,
} from "./controllers";


//Initialize after database
initializePassport();

const app: Express = express();


const authController = new AuthController();
const roomController = new RoomController();
const tableController = new TableController();
const userController = new UserController();



app.use()


app.get("/ping", function (_, res) {
    res.status(200).write("Pong!");
});

let port: Number;
if (process.env.IS_PRODUCTION) {
    port = 3000;
} else {
    port = 4000;
}

app.listen(port);
