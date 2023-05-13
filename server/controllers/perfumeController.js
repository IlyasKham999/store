const { Perfume } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class PerfumeController {
  async create(req, res, next) {
    try {
      let { name, title, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".png";
      img.mv(path.resolve(__dirname, "..", "static", "PerfumePng", fileName));

      const perfume = await Perfume.create({
        name,
        title,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(perfume);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const perfume = await Perfume.findAll();
    return res.json(perfume);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const perfume = await Perfume.findOne({
      where: { id },
    });
    return res.json(perfume);
  }
}

module.exports = new PerfumeController();
