const { BandTagData } = require("../models");

const btData = [
  {
    band_id: 1,
    tag_id: 2,
  },
  {
    band_id: 2,
    tag_id: 2,
  },
  {
    band_id: 3,
    tag_id: 1,
  },
  {
    band_id: 4,
    tag_id: 3,
  },
];

const seedBandTags = () => BandTagData.bulkCreate(btData);

module.exports = seedBandTags;
