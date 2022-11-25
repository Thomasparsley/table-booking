import { Router } from "express";

const router = Router();

router.get("/", function (_, res) {
    res
        .status(200)
        .json([
            {}
        ]);
});