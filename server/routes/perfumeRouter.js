const Router = require("express");
const router = new Router();
const perfumeController = require("../controllers/perfumeController");

router.post("/", perfumeController.create);
router.get("/", perfumeController.getAll);
router.get("/:id", perfumeController.getOne);

module.exports = router;
