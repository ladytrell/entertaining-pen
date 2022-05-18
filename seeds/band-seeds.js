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
