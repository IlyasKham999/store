const Router = require("express");
const router = new Router();
const perfumeController = require("../controllers/perfumeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), perfumeController.create);
router.get("/", perfumeController.getAll);
router.get("/:id", perfumeController.getOne);

module.exports = router;
