const User = require("../models/User");
const str2array = require("./utils/str2array");

module.exports = {
  async index(req, res) {
    const user = await User.find();
    return res.json(user);
  },

  async read(req, res) {
    const { profission } = req.params;
    const resul = await User.find({ profission });

    return res.json(resul === null ? {} : resul);
  },

  async store(req, res) {
    const { name, avatar_url, profission, servicos } = req.body;
    servicosArray = str2array(servicos);
    const user = await User.create({
      name,
      avatar_url,
      profission,
      servicos: servicosArray,
    });
    return res.json(user);
  },
};
