const router = require("express").Router();
const lyricsFinder = require("@jeve/lyrics-finder");
const fs = require('fs');

//router ("/lyrics", async (req, res) => {
router.get("/", async (req, res) => {
    //const searchStr = req.query.search;  
    const songTitle = req.query.title;
    const artist = req.query.artist;
    const searchStr = songTitle + ' - ' + artist;  
    await lyricsFinder.LyricsFinder(searchStr)
        .then((song) => {
            //console.log(song);
            res.render('lyrics', {song, songTitle, artist});
    });
})

module.exports=router;