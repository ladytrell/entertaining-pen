const { Tag } = require("../models");

const tagData = [
  {
    genre1: "Rock",
    genre2: "Pop",
    genre3: "Country",
    fee: 200,
    location: "Raleigh",
    travelRadius: 150,
    setList: "1. BBB, 2. AAA, 3. CCC...",
  },
  {
    genre1: "Jazz",
    genre2: "Pop",
    genre3: "Rock",
    fee: 50,
    location: "Durham",
    travelRadius: 75,
    setList: "1. DDD, 2. EEE, 3. FFF...",
  },
  {
    genre1: "Country",
    genre2: "Pop",
    genre3: "Dance",
    fee: 150,
    location: "Raleigh",
    travelRadius: 100,
    setList: "1. GGG, 2. HHH, 3. III...",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
