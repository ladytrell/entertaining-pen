const router = require("express").Router();

const coordinatorRoutes = require("./coordinator-routes");
const bandRoutes = require("./band-routes");
const userRoutes = require("./user-routes");
const songRoutes = require("./song-routes");

router.use("/coordinators", coordinatorRoutes);
router.use("/bands", bandRoutes);
router.use("/users", userRoutes);
//router.use('/tags', Routes);
router.use("/songs", songRoutes);

module.exports = router;

////////////////////////////
