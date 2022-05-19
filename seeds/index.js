const seedCoordinators = require("./coordinator-seeds");
const seedBands = require("./band-seeds");
<<<<<<< HEAD
const seedTags = require("./tag-seeds");
||||||| d7fa5c2
//const seedTags = require("./tags-seeds");
=======
<<<<<<< HEAD
//const seedTags = require("./tags-seeds");
=======
// const seedTags = require("./tags-seeds");
>>>>>>> feature/coordinator-model
>>>>>>> 64151273e1e866ae55effeae796428288d15bcca

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
