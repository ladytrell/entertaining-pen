// import models

const Coordinator = require("./Coordinator");
const Band = require("./Band");
const Tag = require("./Tag");
const User = require("./User");
const BandTagData = require("./BandTagData");

Tag.belongsTo(Band, {
  foreignKey: "id",
  // onDelete: 'SET NULL'
});

Band.hasOne(Tag, {
  foreignKey: "id",
});
// Song.belongsToMany(Band, {
//   through: SetList,
  //as: 'songs',
//  foreignKey: 'song_id'
// });

// Band.hasMany(Song, {
//   through: SetList,
  //as: 'bands',
 // foreignKey: 'band_id'
// });

module.exports = { Band, Tag, Coordinator, User, BandTagData };
