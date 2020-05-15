const Profession = require("../models/Profession");

module.exports = {
  async index(req, res) {
    const profession = await Profession.find();
    console.log("acessado");
    return res.json(profession);
  },

  async read(req, res) {
    const { name } = req.params;
    const resul = await Profession.find({ name });

    return res.json(resul === null ? {} : resul);
  },

  async store(req, res) {
    const { name, avatar_url } = req.body;
    const profession = await Profession.create({
      name,
      avatar_url,
    });
    return res.json(profession);
  },

  async delete(req, res) {
    const { name } = req.params;
    await Profession.deleteOne({ name });
    return res.json();
  },
};
