const router = require("express").Router();

const coordinatorRoutes = require("./coordinator-routes");

router.use("/coordinators", coordinatorRoutes);

module.exports = router;
