const Router = require("express");
const router = new Router();
const ClockController = require("../controllers/clockController");

router.post("/", ClockController.create);
router.get("/", ClockController.getAll);
router.get("/:id", ClockController.getOne);

module.exports = router;
