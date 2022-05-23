const { Band } = require("../models");

const bandData = [
  {
    bandname: "Sick Sugar",
    email: "sick-sugar@music.com",
    imagePath:
      "https://media.istockphoto.com/photos/hands-in-the-air-picture-id833572242?b=1&k=20&m=833572242&s=170667a&w=0&h=gpxJO3MQKDtpkae9z9ww1Rxn5-Lx9ZaJuS32fn7GSA0=",
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

const seedBands = () => Band.bulkCreate(bandData);

module.exports = seedBands;
