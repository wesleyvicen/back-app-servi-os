const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();
const cors = require("cors");
const porta = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://wesley:w99441494@cluster0-wwxxt.mongodb.net/servicos?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);
server.use(cors());
server.use(express.json());

server.use(routes);
server.listen(porta);
