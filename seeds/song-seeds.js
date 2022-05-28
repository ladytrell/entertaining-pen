const { Song } = require("../models");

const songData = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd"
  },
  {
    title: "The Twist",
    artist: "Chubby Checker"
  },
  {
    title: "Smooth",
    artist: "Santana Featuring Rob Thomas"
  },
  {
    title: "Uptown Funk!",
    artist: "Mark Ronson Featuring Bruno Mars"
  },
  {
    title: "How Do I Live",
    artist: "LeAnn Rimes"
  },
  {
    title: "Party Rock Anthem",
    artist: "LMFAO Featuring Lauren Bennett & GoonRock"
  },
  {
    title: "I Gotta Feeling",
    artist: "The Black Eyed Peas"
  },
  {
    title: "Macarena",
    artist: "Los Del Rio"
  },
  {
    title: "Shape Of You",
    artist: "Ed Sheeran"
  },
  {
    title: "Physical",
    artist: "Olivia Newton-John"
  },
  {
    title: "Mack The Knife",
    artist: "Bobby Darin"
  },
  {
    title: "Mack The Knife",
    artist: "Bobby Darin"
  },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
