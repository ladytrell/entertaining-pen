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

    const bands = bandData.map((bandInfo) => bandInfo.get({ plain: true }));

    res.render("findABand", {
      bands,
      // loggedIn: req.session.loggedIn,
    });
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
    const band = bandData.dataValues;
    console.log(band);
    res.render("band-landing", {
      band,
      // loggedIn: req.session.loggedIn,
    });
    // res.status(200).json(bandData);
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

router.put("/:id", async (req, res) => {
  // update a band by its `id` value
  try {
    const bandData = await Band.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const band = bandData.dataValues;
    res
      .status(200)
      // .json(bandData);
      .render("band-update", {
        band,
      });
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

module.exports = router;
