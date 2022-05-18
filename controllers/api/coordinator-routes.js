const router = require("express").Router();
const { Coordinator } = require("../../models/");
// const withAuth = require("../../utils/auth");

// GET /api/coordinators
router.get("/", (req, res) => {
  Coordinator.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbCoordinatorData) => res.json(dbCoordinatorData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
