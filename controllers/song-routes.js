const router = require("express").Router();
const lyricsFinder = require("@jeve/lyrics-finder");
const fs = require('fs');

//router ("/song", async (req, res) => {
router.post("/", async (req, res) => {
    const searchStr = req.body.search;
    await lyricsFinder.LyricsFinder(searchStr)
        .then((song) => {
            console.log(song);
            res.render('song', {song});
           // res.redirect('/song');
    });
})

module.exports=router;