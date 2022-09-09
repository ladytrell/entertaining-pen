const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

// Begin Coordinator model
class Coordinator extends Model {}

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
    // define organization column
    organization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "coordinator",
  }
);

module.exports = Coordinator;
