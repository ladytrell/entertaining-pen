const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/config');

class SetList extends Model {}

SetList.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Band',
        key: 'id'
      }
    },
    song_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'song',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'set_list',
  }
);

module.exports = SetList;
