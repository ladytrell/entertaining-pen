const seedCoordinators = require("./coordinator-seeds");
const seedBands = require("./band-seeds");
const seedTags = require("./tag-seeds");

const sequelize = require("../config/config");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedCoordinators();
  console.log("--------------");
  await seedBands();
  console.log("--------------");
  await seedTags();
  console.log("--------------");

  process.exit(0);
};

seedAll();
