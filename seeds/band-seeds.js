const { Band } = require("../models");

const bandData = [
  {
    bandname: "Sick Sugar",
    email: "sick-sugar@music.com"
  },
  {
    bandname: "Soul Singers",
    email: "soul-singers@music.com"
  },
  {
    bandname: "Little Monstors",
    email: "little-monstors@music.com"
  },
  {
    bandname: "Fire Wings",
    email: "fire-wings@music.com"
  },
];

const seedBands = () => 
  Band.bulkCreate(bandData);

module.exports = seedBands;
