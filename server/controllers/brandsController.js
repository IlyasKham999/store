const { Brand, Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class BrandController {
  async create(req, res) {
    let { name, typeId } = req.body;
    const brand = await Brand.create({ name, typeId });
    return res.json(brand);
  }

  async delete(req, res) {
    const resourceId = req.params.id;
    try {
      await Brand.destroy({ where: { id: resourceId } });
      res.send(`Ресурс ${resourceId} был удален`);
    } catch (error) {
      console.error(error);
      res.status(500).send("Произошла ошибка при удалении ресурса");
    }
  }

  async getAll(req, res) {
    const brand = await Brand.findAll();
    return res.json(brand);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const brand = await Brand.findOne({
      where: { id },
    });
    return res.json(brand);
  }

  async getOneType(req, res) {
    const { typeId } = req.params;
    const brand = await Brand.findAll({
      where: { typeId },
    });
    return res.json(brand);
  }
}

module.exports = new BrandController();
