const { Clock, Jewelry } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class ClockController {
  async create(req, res, next) {
    try {
      let { name, form, title, price, brandId, typeId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpeg";
      img.mv(path.resolve(__dirname, "..", "static", "clockPng", fileName));

      const clock = await Clock.create({
        name,
        form,
        title,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(clock);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const clock = await Clock.findAll();
    return res.json(clock);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const clock = await Clock.findOne({
      where: { id },
    });
    return res.json(clock);
  }
}

module.exports = new ClockController();
