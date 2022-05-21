const bcrypt = require("bcrypt");
// import important parts of sequelize library
const { Model, DataTypes, DATE, INTEGER } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/config");

// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {
   checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
 }
};

// set up fields and rules for Users mode
User.init(
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    role_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coordinator_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Coordinator",
        key: "id",
      },
    },
    band_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Band",
        key: "id",
      },
    },
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
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
