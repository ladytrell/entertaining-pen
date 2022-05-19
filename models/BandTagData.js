const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/config.js");

class BandTagData extends Model {}

BandTagData.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Band",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "BandTagData",
  }
);

module.exports = BandTagData;
