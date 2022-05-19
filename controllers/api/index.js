const router = require("express").Router();

const coordinatorRoutes = require("./coordinator-routes.js");
const bandRoutes = require("./band-routes");
// const commentRoutes = require('./comment-routes');

router.use("/coordinators", coordinatorRoutes);
router.use("/bands", bandRoutes);
// router.use('/tags', Routes);

module.exports = router;

////////////////////////////
