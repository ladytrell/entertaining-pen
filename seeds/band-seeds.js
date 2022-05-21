const { Band } = require("../models");

const banddata = [
  {
    bandname: "Sick Sugar",
    username: "sicksugar",
    email: "sick-sugar@music.com",
    password: "password123",
  },
  {
    bandname: "Soul Singers",
    email: "soul-singers@music.com",
  },
  {
    bandname: "Little Monstors",
    email: "little-monstors@music.com",
  },
  {
    bandname: "Fire Wings",
    email: "fire-wings@music.com",
  },
];

const seedBands = () => Band.bulkCreate(banddata, { individualHooks: true });

module.exports = seedBands;
