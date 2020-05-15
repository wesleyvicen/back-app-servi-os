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
    const { name, avatar_url, profission, servicos, contatos } = req.body;
    servicosArray = str2array(servicos);
    contatosArray = str2array(contatos);
    const user = await User.create({
      name,
      avatar_url,
      profission,
      servicos: servicosArray,
      contatos: contatosArray,
    });
    return res.json(user);
  },

  async delete(req, res) {
    const { name } = req.params;
    await User.deleteOne({ name });
    return res.json();
  },
};
