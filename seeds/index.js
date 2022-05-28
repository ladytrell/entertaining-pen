const seedCoordinators = require("./coordinator-seeds");
const seedBands = require("./band-seeds");
const seedTags = require("./tag-seeds");
const seedUsers = require("./user-seeds");
const seedBandTags = require("./bandTagData-seeds");
const seedSongs = require("./song-seeds");
const seedSetLists = require("./setList-seeds");

const sequelize = require("../config/config");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedCoordinators();
  console.log("--------------");
  await seedBands();
  console.log("--------------");
  await seedUsers();
  console.log("--------------");
  await seedTags();
  console.log("--------------");
  await seedBandTags();
  console.log("--------------");
  await seedSongs();
  console.log("--------------");
  await seedSetLists();
  console.log("--------------");

  process.exit(0);
};

seedAll();
