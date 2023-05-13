const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");

class BrandController {
  async create(req, res) {
    let { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brand = await Brand.findAll();
    return res.json(brand);
  }
}

module.exports = new BrandController();