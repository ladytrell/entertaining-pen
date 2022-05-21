const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

// Begin Coordinator model
class Coordinator extends Model {
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

// define table columns and configuration
Coordinator.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    // define organization column
    organization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // hooks: {
    //   // set up beforeCreate lifecycle "hook" functionality
    //   async beforeCreate(newUserData) {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    //   // set up beforeUpdate lifecycle "hook" functionality
    //   async beforeUpdate(updatedUserData) {
    //     updatedUserData.password = await bcrypt.hash(
    //       updatedUserData.password,
    //       10
    //     );
    //     return updatedUserData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "coordinator",
  }
);

module.exports = Coordinator;
