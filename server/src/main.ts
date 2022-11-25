import express, { Express } from "express";
import { initializePassport } from "./helpers";
import { expressjwt, ExpressJwtRequest } from "express-jwt";


//Initialize after database
initializePassport();

const app: Express = express();

app.get("/auth",
    expressjwt({
        secret: "", //TODO: add secret
        algorithms: ["HS256"]
    }),
    function (req, res) {
        if (!req.isAuthenticated()) {
            res.writeHead(403)
            res.end("Forbidden");
        }
    }
)

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
