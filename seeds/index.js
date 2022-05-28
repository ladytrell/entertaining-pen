const seedCoordinators = require("./coordinator-seeds");
const seedBands = require("./band-seeds");
const seedTags = require("./tag-seeds");
const seedUsers = require("./user-seeds");
const seedBandTags = require("./bandTagData-seeds");
const seedSongs = require("./song-seeds");

const sequelize = require("../config/config");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedSongs();
  console.log("--------------");
  await seedCoordinators();
  console.log("--------------");
  await seedBands();
  console.log("--------------");
  await seedUsers();
  await seedTags();
  console.log("--------------");
  await seedBandTags();
  console.log("--------------");

  process.exit(0);
};

seedAll();
