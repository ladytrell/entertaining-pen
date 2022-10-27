const router = require("express").Router();
const { Band, Tag, User, Song, SetList } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
  console.log(req.session);
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
    isCoordinator: req.session.isCoordinator,
    isBand: req.session.isBand,
  });
});

// giving you the login and signup route pieces below, no changes needed.
router.get("/login", async (req, res) => {
  // console.log(req.session);
  if (req.session.loggedIn) {
    if (req.session.isBand) {
      const userData = await User.findByPk(req.session.user_id, {});
      const bandId = userData.band_id;
      let url = "/bands/band-card/" + bandId;
      res.redirect(url);
    } else {
      res.redirect("/findABand");
    }
  }

  res.render("login");
});

router.get("/findABand", async (req, res) => {
  console.log("findABand",req.session);
  try {
    const bandData = await Band.findAll({
      include: [{ model: Tag }],
    });
    // res.status(200).json(bandData);

    const bands = bandData.map((bandInfo) => bandInfo.get({ plain: true }));
    console.log("loggedIn", req.session.loggedIn);
    res.render("findABand", {
      bands,
      loggedIn: req.session.loggedIn,
      isCoordinator: req.session.isCoordinator,
      isBand: req.session.isBand,
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
/*
// Bands w/ Tags
router.get("/view-bands-tags", (req, res) => {
  console.log("view-bands-tags",req.session);
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
          "travelRadius"//,
          //"setList"
        ],
      },
      {
        model:  Song,
        through: SetList
      }
    ],
  })
    .then((bandData) => {
      const bands = bandData.map((band) => band.get({ plain: true }));
      res.render("view-bands-tags", { 
        bands,
        loggedIn: req.session.loggedIn,
        isCoordinator: req.session.isCoordinator,
        isBand: req.session.isBand,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
// update band info
router.get("/bandUpdate", async (req, res) => {
  if (req.session.loggedIn) {
    const userData = await User.findByPk(req.session.user_id, {});
    const bandId = userData.band_id;
    console.log(bandId);

    const bandData = await Band.findByPk(bandId, {
      // include: [{ model: Tag }],
    });
    // res.status(200).json(bandData);
    const band = bandData.dataValues;
    // console.log(band);
    res.render("bandUpdate", {
      band,
      loggedIn: req.session.loggedIn,
      isCoordinator: req.session.isCoordinator,
      isBand: req.session.isBand,
    });
  } else {
    console.log(err, "500 error: Cannot update");
  }
  // res.status(200).json(bandData);
});
*/
module.exports = router;
