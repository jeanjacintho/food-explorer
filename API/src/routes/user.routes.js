const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UseValidatedController = require("../controllers/UsersValidatedController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();
const userValidatedController = new UseValidatedController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, userValidatedController.index);

module.exports = usersRoutes;