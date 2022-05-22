const router = require("express").Router();

const coordinatorRoutes = require("./coordinator-routes.js");
const bandRoutes = require("./band-routes");
const userRoutes = require('./user-routes.js');

router.use("/coordinators", coordinatorRoutes);
router.use("/bands", bandRoutes);
router.use("/users", userRoutes);
// router.use('/tags', Routes);

module.exports = router;

////////////////////////////
