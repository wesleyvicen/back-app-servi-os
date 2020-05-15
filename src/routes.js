const { Router } = require("express");
const ProfessionController = require("./controllers/ProfessionController");

const routes = Router();

routes.get("/profession", ProfessionController.index);
routes.get("/profession/:name", ProfessionController.read);
routes.post("/profession", ProfessionController.store);
routes.delete("/profession/:name", ProfessionController.delete);

module.exports = routes;
