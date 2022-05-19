const { Band } = require("../models");

const banddata = [
  {
    bandname: "Sick Sugar",
    username: "sicksugar",
    email: "sick-sugar@music.com",
    password: "password123",
  },
  {
    username: "soulsingers",
    bandname: "Soul Singers",
    email: "soul-singers@music.com",
    password: "password123",
  },
  {
    username: "littlemonstors",
    bandname: "Little Monstors",
    email: "little-monstors@music.com",
    password: "password123",
  },
  {
    username: "firewings",
    bandname: "Fire Wings",
    email: "fire-wings@music.com",
    password: "password123",
  },
];

const seedBands = () => Band.bulkCreate(banddata, { individualHooks: true });

module.exports = seedBands;
