const mongoose = require("mongoose");

const ProfessionSchema = new mongoose.Schema({
  name: String,
  avatar_url: String,
});

module.exports = mongoose.model("Profession", ProfessionSchema);
