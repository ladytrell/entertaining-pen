const router = require("express").Router();
const { Band, Tag, User } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
  res.render("homepage");
});

// giving you the login and signup route pieces below, no changes needed.
router.get("/login", async (req, res) => {
  console.log(req.session.isBand);
  if (await req.session.loggedIn) {
    if (await req.session.isBand) {
      res.redirect("/band-landing");
    } else {
      res.redirect("/findABand");
    }
    console.log("what");
  }

  res.render("login");
});

router.get("/find-band", async (req, res) => {
  res.render("find-band");
});

// Lyric Search
router.get("/lyric-search", async (req, res) => {
  res.render("lyricsearch");
});

router.get("/findABand", async (req, res) => {
  try {
    const bandData = await Band.findAll({
      include: [{ model: Tag }],
    });
    // res.status(200).json(bandData);

    const bands = bandData.map((bandInfo) => bandInfo.get({ plain: true }));

    res.render("findABand", {
      bands,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/band-card/:id", async (req, res) => {
  try {
    const bandData = await Band.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });
    // res.status(200).json(bandData);
    const band = bandData.dataValues;
    // console.log(band);
    res.render("band-card", {
      band,
      // loggedIn: req.session.loggedIn,
    });
    // res.status(200).json(bandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//band landing page dashboard route that allows user to update info

router.get("/band-landing", async (req, res) => {
  const bandData = await Band.findByPk(3, {
    // include: [{ model: Tag }],
  });
  // res.status(200).json(bandData);

  const band = bandData.get({ plain: true });
  // .get({ plain: true });
  console.log(band);
  res.render("band-landing", {
    band,
    loggedIn: req.session.loggedIn,
  });
});

// Bands w/ Tags
router.get("/view-bands-tags", (req, res) => {
  Band.findAll({
    attributes: ["id", "bandname", "email", "imagePath"],
    include: [
      {
        model: Tag,
        attributes: [
          "id",
          "genre1",
          "genre2",
          "genre3",
          "fee",
          "location",
          "travelRadius",
        ],
      },
    ],
  })
    .then((bandData) => {
      const bands = bandData.map((band) => band.get({ plain: true }));
      res.render("view-bands-tags", { bands });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/bandUpdate/:id", async (req, res) => {
  try {
    const bandData = await Band.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });
    // res.status(200).json(bandData);
    const band = bandData.dataValues;
    console.log(band);
    res.render("bandUpdate", {
      band,
      // loggedIn: req.session.loggedIn,
    });
    // res.status(200).json(bandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/lyricsearch", async (req, res) => {
  res.render("lyricsearch");
});
/*
router.get("/song", async (req, res) => {
  res.render("song");
});
*/
module.exports = router;
