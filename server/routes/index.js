const Router = require("express");
const router = new Router();

const brandsRouter = require("./brendsRouter");
const clockRouter = require("./clockRouter");
const jewelryRouter = require("./jewelryRouter");
const leatherProductsRouter = require("./leatherProductsRouter");
const perfumeRouter = require("./perfumeRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");

router.use("/jewelry", jewelryRouter);
router.use("/clock", clockRouter);
router.use("/perfume", perfumeRouter);
router.use("/leatherProducts", leatherProductsRouter);
router.use("/brand", brandsRouter);
router.use("/type", typeRouter);
router.use("/user", userRouter);

module.exports = router;
