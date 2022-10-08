const router = require("express").Router();
const { Band, Tag, User, Song, SetList } = require("../models");


router.get("/band-card/:id", async (req, res) => {
//router.get("/band-card/:id", async (req, res) => {
    try {
      const bandData = await Band.findByPk(req.params.id, {
        // include: [{ model: Tag }],
       include: [
          {
            model:  Song
          }
        ]
      });
      // res.status(200).json(bandData);
      const band = bandData.get({ plain: true });
      console.log(band);
      res.render("band-card", {
        band,
        isBand: req.session.isBand,
        loggedIn: req.session.loggedIn,
        isCoordinator: req.session.isCoordinator
      });
      // res.status(200).json(bandData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //band landing page dashboard route that allows user to update band info
  
  router.get("/band-landing", async (req, res) => {
    if (req.session.loggedIn) {
      const userData = await User.findByPk(req.session.user_id, {});
      const bandId = userData.band_id;
  
      const bandData = await Band.findByPk(bandId, {
        // include: [{ model: Tag }],
       include: [
          {
            model:  Song
          }
        ]
      });
      // res.status(200).json(bandData);
      //console.log("Line 92 bandData", bandData);
  
      const band = bandData.get({ plain: true });
      console.log("line 95 band", band);
      // .get({ plain: true });
      // console.log(band, req.session.user_id, bandId);
      res.render("band-landing", {
        band,
        loggedIn: req.session.loggedIn,
        isCoordinator: req.session.isCoordinator,
        isBand: req.session.isBand
      });
    } else {
      res.render("login");
    }
  });
  
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

  module.exports = router;