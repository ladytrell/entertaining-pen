const router = require("express").Router();
const { Coordinator } = require("../../models/");
const withAuth = require("../../utils/auth");

// GET / api / coordinators
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

// GET /api/coordinators/1
router.get("/:id", (req, res) => {
  Coordinator.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbCoordinatorData) => {
      if (!dbCoordinatorData) {
        res.status(404).json({ message: "No coordinator found with this id" });
        return;
      }
      res.json(dbCoordinatorData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/coordinators
router.post("/", (req, res) => {
  Coordinator.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    organization: req.body.organization,
  })
    .then((dbCoordinatorData) => {
      req.session.save(() => {
        req.session.user_id = dbCoordinatorData.id;
        req.session.username = dbCoordinatorData.username;
        req.session.loggedIn = true;
        res.json(dbCoordinatorData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/coordinators/login
router.post("/login", withAuth, (req, res) => {
  Coordinator.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbCoordinatorData) => {
    if (!dbCoordinatorData) {
      res
        .status(400)
        .json({ message: "No coordinator found with that email address!" });
      return;
    }

    const validPassword = dbCoordinatorData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbCoordinatorData.id;
      req.session.username = dbCoordinatorData.username;
      req.session.loggedIn = true;

      res.json({
        coordinator: dbCoordinatorData,
        message: "You are now logged in!",
      });
    });
  });
});

// DELETE /api/coordinators/1
router.delete("/:id", withAuth, (req, res) => {
  Coordinator.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCoordinatorData) => {
      if (!dbCoordinatorData) {
        res.status(404).json({ message: "No coordinator found with this id" });
        return;
      }
      res.json(dbCoordinatorData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/coordinators/logout
router.post("/logout", withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
