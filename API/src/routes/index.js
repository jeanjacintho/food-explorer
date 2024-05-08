const { Router } = require("express");

const userRouter = require("./user.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;