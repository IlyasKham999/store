const Router = require("express");
const router = new Router();
const jewelryController = require("../controllers/jewelryController");

router.post("/", jewelryController.create);
router.get("/", jewelryController.getAll);
router.get("/:id", jewelryController.getOne);

module.exports = router;
