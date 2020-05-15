const { Router } = require("express");
const ProfessionController = require("./controllers/ProfessionController");
const UserController = require("./controllers/UserController");

const routes = Router();

routes.get("/profession", ProfessionController.index);
routes.get("/profession/:name", ProfessionController.read);
routes.post("/profession", ProfessionController.store);
routes.delete("/profession/:name", ProfessionController.delete);

routes.get("/user", UserController.index);
routes.get("/user/:name", UserController.read);
routes.post("/user", UserController.store);

module.exports = routes;
