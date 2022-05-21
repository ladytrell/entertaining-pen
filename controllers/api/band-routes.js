const router = require("express").Router();
const { Band } = require("../../models");
const { Tag } = require("../../models");
const withAuth = require("../../utils/auth");

// The `/api/bands` endpoint

router.get("/", async (req, res) => {
  // find all bands
  // be sure to include its associated Tags

  try {
    const bandData = await Band.findAll({
      include: [{ model: Tag }],
    });
    res.status(200).json(bandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one band by its `id` value
  // be sure to include its associated Tags
  try {
    const bandData = await Band.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });
    res.status(200).json(bandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // CREATE a new band
  try {
    const bandData = await Band.create(req.body);
    req.session.save(() => {
      req.session.loggedIn = true;
    });
    res.status(200).json(bandData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//api/bands/login
router.post("/login", withAuth, async (req, res) => {
  try {
    const dbBandData = await Band.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbBandData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    const validPassword = await dbBandData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    // Once the band/user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbBandData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a band by its `id` value
  try {
    const bandData = await Band.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(bandData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a band by its `id` value
  try {
    const bandData = await Band.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(bandData);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Logout
router.post("/logout", withAuth, async (req, res) => {
  // When the band/user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
