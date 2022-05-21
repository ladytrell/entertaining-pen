const bcrypt = require("bcrypt");
// import important parts of sequelize library
const { Model, DataTypes, DATE, INTEGER } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/config");

// Initialize Product model (table) by extending off Sequelize's Model class
class Band extends Model {}

// set up fields and rules for Bands model
Band.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bandname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // socialMedia: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Band",
  }
);

module.exports = Band;
