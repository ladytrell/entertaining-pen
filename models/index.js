// import models

const Coordinator = require("./Coordinator");
const Band = require("./Band");
const Tag = require("./Tag");
const BandTagData = require("./BandTagData");

Tag.belongsToMany(Band, {
  through: BandTagData,
});

Band.belongsToMany(Tag, {
  through: BandTagData,
});

module.exports = { Band, Tag, Coordinator };
