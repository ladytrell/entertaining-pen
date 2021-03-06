const router = require("express").Router();

const coordinatorRoutes = require("./coordinator-routes");
const bandRoutes = require("./band-routes");
const userRoutes = require("./user-routes");
const tagRoutes = require("./tag-routes");

router.use("/coordinators", coordinatorRoutes);
router.use("/bands", bandRoutes);
router.use("/users", userRoutes);
router.use("/tags", tagRoutes);

module.exports = router;