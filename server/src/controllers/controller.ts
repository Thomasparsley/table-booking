import { Express, Router } from "express";

export class Controller {
    installRoutes(
        app: Express,
        prefix: string | null = null,
        router: Router = Router(),
    ) {
        if (prefix) {
            app.use(prefix, router);
        } else {
            app.use(router);
        }
    }
}
