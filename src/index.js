const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();
const port = 3000;

mongoose.connect(
  "mongodb+srv://wesley:w99441494@cluster0-wwxxt.mongodb.net/servicos?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
server.use(express.json());
server.use(routes);

server.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
