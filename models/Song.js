const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Song extends Model {}

Song.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    song_title: {      
      type: DataTypes.STRING
    },
    artist: {      
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'song',
  }
);

module.exports = Song;
