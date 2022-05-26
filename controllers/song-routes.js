const router = require("express").Router();
const lyricsFinder = require("@jeve/lyrics-finder");
const fs = require('fs');

//router ("/song", async (req, res) => {
router.get("/", async (req, res) => {
    const searchStr = req.query.search;    
    await lyricsFinder.LyricsFinder(searchStr)
        .then((song) => {
            //console.log(song);
            res.render('song', {song});
    });
})

module.exports=router;