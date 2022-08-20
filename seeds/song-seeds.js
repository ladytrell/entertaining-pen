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
    title: "Mack The Knife",
    artist: "Bobby Darin"
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
    title: "You Light Up My Life",
    artist: "Debby Boone"
  },
  {
    title: "Don't Stop Believing",
    artist: "Journey"
  },
  {
    title: "Horse With No Name",
    artist: "America"
  },
  {
    title: "Hey Jude",
    artist: "The Beatles"
  },
  {
    title: "Welcome To The Jungle",
    artist: "Guns N Roses"
  },
  {
    title: "Hotel California",
    artist: "The Eagles"
  },
  {
    title: "Take Five",
    artist: "Dave Brubeck Quartet"
  },
  {
    title: "Take The A Train",
    artist: "Duke Ellington"
  },
  {
    title: "Moanin\'",
    artist: "Art Blakey"
  },
  {
    title: "So What",
    artist: "Miles Davis"
  },
  {
    title: "A Love Supreme",
    artist: "John Coletrane"
  },
  {
    title: "I Will Always Love You",
    artist: "Dolly Parton"
  },
  {
    title: "A Boy Named Sue",
    artist: "Johnny Cash"
  },
  {
    title: "Ode To Billy Joe",
    artist: "Bobbie Gentry"
  },
  {
    title: "You're Still The One",
    artist: "Shania Twain"
  },
  {
    title: "Feels So Right",
    artist: "Alabama"
  },
  {
    title: "Lost Ones",
    artist: "Lauren Hill"
  },
  {
    title: "Hey Ya",
    artist: "OutKast"
  },
  {
    title: "Baby's Got Back",
    artist: "Sir Mixalot"
  },
  {
    title: "Empire State of Mind",
    artist: "Jay Z"
  },
  {
    title: "Gold Digger",
    artist: "Kanye West"
  },
];

const seedSongs = () => Song.bulkCreate(songData);

module.exports = seedSongs;
