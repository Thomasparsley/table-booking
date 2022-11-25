import express, { Express } from "express";

const app: Express = express();

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
