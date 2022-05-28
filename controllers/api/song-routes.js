const router = require("express").Router();
const { Band } = require("../../models");
const { SetList } = require("../../models");
const { Song } = require("../../models");
const withAuth = require("../../utils/auth");

// GET / api / Songs
router.get("/", (req, res) => {
  // Check for query keys
  const keys = Object.keys(req.query).length;
  
  if(keys){
    console.log("Query");
    const band_id = req.query.band_id;
    Band.findOne({
      where: { id: band_id },
      include: [
        {
          model: Song,
        }
    ]
    })
    .then((dbSongData) => res.json(dbSongData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });    
  } else {
    Song.findAll()
    .then((dbSongData) => res.json(dbSongData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  }  
});

// POST /api/Song
router.post("/", (req, res) => {  
  
  Song.create({
    title: req.body.title,
    artist: req.body.artist
  })
  .then(async (dbSongData) => {
    await SetList.create({
      song_id: dbSongData.dataValues.id,
      band_id: req.body.band_id
    })
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
  