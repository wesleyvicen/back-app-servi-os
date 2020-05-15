const { Router } = require("express");
const ProfessionController = require("./controllers/ProfessionController");

const routes = Router();

routes.get("/profession", ProfessionController.index);
routes.post("/profession", ProfessionController.store);

module.exports = routes;
