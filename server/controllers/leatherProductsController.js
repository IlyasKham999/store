const { LeatherProducts } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class LeatherProductsController {
  async create(req, res, next) {
    try {
      let { name, form, title, price, brandId, typeId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpeg";
      await img.mv(
        path.resolve(__dirname, "..", "static", "LeatherProductsPng", fileName)
      );

      const jewelry = await LeatherProducts.create({
        name,
        form,
        title,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(jewelry);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const jewelry = await LeatherProducts.findAll();
    return res.json(jewelry);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const jewelry = await LeatherProducts.findOne({
      where: { id },
    });
    return res.json(jewelry);
  }
}

module.exports = new LeatherProductsController();
