const Router = require("express");
const router = new Router();
const LeatherProductsController = require("../controllers/leatherProductsController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), LeatherProductsController.create);
router.get("/", LeatherProductsController.getAll);
router.get("/:id", LeatherProductsController.getOne);

module.exports = router;
