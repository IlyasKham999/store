const Router = require("express");
const router = new Router();
const BrandController = require("../controllers/brandsController");
const TypeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), BrandController.create);
router.delete("/:id", BrandController.delete);
router.get("/", BrandController.getAll);
router.get("/:id", BrandController.getOne);
router.get("/typeId/:typeId", BrandController.getOneType);

module.exports = router;
