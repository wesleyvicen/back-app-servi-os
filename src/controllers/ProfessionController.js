const Profession = require("../models/Profession");

module.exports = {
  async index(req, res) {
    const profession = await Profession.find();
    console.log("acessado");
    return res.json(profession);
  },

  async store(req, res) {
    const { name, avatar_url } = req.body;
    const profession = await Profession.create({
      name,
      avatar_url,
    });
    return res.json(profession);
  },
};
