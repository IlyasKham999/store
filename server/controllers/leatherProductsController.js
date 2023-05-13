const { LeatherProducts } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class LeatherProductsController {
  async create(req, res, next) {
    try {
      let { name, title, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".png";
      img.mv(
        path.resolve(__dirname, "..", "static", "leatherProductsPng", fileName)
      );

      const leatherProducts = await LeatherProducts.create({
        name,
        title,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(leatherProducts);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const leatherProducts = await LeatherProducts.findAll();
    return res.json(leatherProducts);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const leatherProducts = await LeatherProducts.findOne({
      where: { id },
    });
    return res.json(leatherProducts);
  }
}

module.exports = new LeatherProductsController();
