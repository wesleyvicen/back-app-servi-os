const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  avatar_url: String,
  profission: String,
  servicos: [String],
  contatos: [String],
});

module.exports = mongoose.model("User", UserSchema);
