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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8],
      },
    },
    bandname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // socialMedia: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Band",
  }
);

module.exports = Band;
