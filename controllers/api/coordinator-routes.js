const router = require("express").Router();
const { Coordinator } = require("../../models/");
// const withAuth = require("../../utils/auth");

// GET /api/coordinators
// router.get("/", (req, res) => {
//   Coordinator.findAll({
//     attributes: { exclude: ["password"] },
//   })
//     .then((dbCoordinatorData) => res.json(dbCoordinatorData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get("/", async (req, res) => {
  // find all bands
  // be sure to include its associated Tags

  try {
    const coordinatorData = await Coordinator.findAll({
      // include: [{ model: Tags }],
    });
    res.status(200).json(coordinatorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
