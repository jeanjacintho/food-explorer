const { Router } = require("express");

const userRouter = require("./user.routes");
const sessionsRouter = require("./sessions.routes");
const dishesRouter = require("./dishes.routes");
const favoritesRouter = require("./favorites.routes");
const ordersRouter = require("./orders.routes");

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/dishes", dishesRouter);
routes.use("/favorites", favoritesRouter);
routes.use("/orders", ordersRouter);

module.exports = routes;