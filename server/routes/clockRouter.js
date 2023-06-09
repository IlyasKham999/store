const Router = require("express");
const router = new Router();
const ClockController = require("../controllers/clockController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), ClockController.create);
router.get("/", ClockController.getAll);
router.get("/:id", ClockController.getOne);

module.exports = router;
