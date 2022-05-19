<<<<<<< HEAD
const { Band } = require("../models");
||||||| d7fa5c2
const { Band } = require('../models');
=======
<<<<<<< HEAD
const { Band } = require('../models');
>>>>>>> 64151273e1e866ae55effeae796428288d15bcca

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

<<<<<<< HEAD
module.exports = seedBands;
||||||| d7fa5c2
module.exports = seedBands;
=======
module.exports = seedBands;
=======
const { Band } = require("../models");

const bandData = [
  {
    username: "Sick Sugar",
    email: "sick-sugar@music.com",
    password: "password123",
    socialMedia: {
      facebook: "",
      instagram: "",
    },
  },
  {
    username: "Soul Singers",
    email: "soul-singers@music.com",
    password: "password123",
    socialMedia: {
      facebook: "",
      instagram: "",
    },
  },
];

const seedBands = () => Band.bulkCreate(bandData, { individualHooks: true });

module.exports = seedBands;
>>>>>>> feature/coordinator-model
>>>>>>> 64151273e1e866ae55effeae796428288d15bcca
