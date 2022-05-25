const router = require("express").Router();
const { Band, Tag, User } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
  res.render("homepage");
});

// giving you the login and signup route pieces below, no changes needed.
router.get("/login", (req, res) => {
  console.log(req.session.isBand);
  if (req.session.loggedIn) {
    if (req.session.isBand) {
      res.redirect("/band");
    } else {
      res.redirect("/coordinator");
    }
  }

  res.render("login");
});

router.get("/find-band", async (req, res) => {
  res.render("find-band");
});

// Lyric Search
router.get('/lyric-search', async (req, res) => {
  res.render('lyricsearch');
});

/*
// get single post
router.get('/post/:id', async (req, res) => {
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

module.exports = router;
