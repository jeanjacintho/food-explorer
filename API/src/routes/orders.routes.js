const {Router} = require("express");

const OrdersController = require("../controllers/OrdersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const ordersRoutes = Router();
const ordersController = new OrdersController();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.get("/", ordersController.index);
ordersRoutes.post("/", ordersController.create);
ordersRoutes.patch("/", verifyUserAuthorization("admin"), ordersController.update);

module.exports = ordersRoutes;