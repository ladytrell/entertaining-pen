const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require('./home-routes.js');
const lyricRoutes = require("./lyric-routes.js");
// const dashboardRoutes = require('./band-routes.js');

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/lyrics", lyricRoutes);

module.exports = router;
