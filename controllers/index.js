const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require('./home-routes.js');
const songRoutes = require("./song-routes.js");
// const dashboardRoutes = require('./band-routes.js');

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/song", songRoutes);

module.exports = router;
