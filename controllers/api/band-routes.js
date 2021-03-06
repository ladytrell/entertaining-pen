const router = require("express").Router();
const { Band, Tag, User } = require("../../models");
// const withAuth = require("../../utils/auth");

// The `/api/bands` endpoint

router.get("/", async (req, res) => {
  // find all bands
  // be sure to include its associated Tags

  try {
    const bandData = await Band.findAll({
      include: [{ model: Tag }],
    });
    res.status(200).json(bandData);

    // const bands = bandData.map((bandInfo) => bandInfo.get({ plain: true }));

    // res.render("findABand", {
    //   bands,
    //   // loggedIn: req.session.loggedIn,
    // });
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
    // res.status(200).json(bandData);
    const band = bandData.dataValues;
    console.log(band);
    res.render("band-card", {
      band,
      // loggedIn: req.session.loggedIn,
    });
    // res.status(200).json(bandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const bandData = await Band.create(req.body);
    console.log(bandData);
    await User.update(
      {
        band_id: bandData.dataValues.id,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    );
    req.session.save(() => {
      req.session.loggedIn = true;
    });
    res.status(200).json(bandData);
    //how to get to put route /api/user/:id
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/", async (req, res) => {
  // update a band by its `id` value

  try {
    const userData = await User.findByPk(req.session.user_id, {});
    const bandId = userData.band_id;
    console.log(bandId, "in band routes");
    const bandData = await Band.update(req.body, {
      where: {
        id: bandId,
        // id: 4,
      },
    });
    res.render("band-landing");
    // res.status(200).json(bandData);
  } catch (error) {
    console.log(error);
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
