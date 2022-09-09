const { Coordinator } = require("../models");

const coordinatorData = [
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
  {
    organization: "Neal Productions",
  },
];

const seedCoordinators = () =>
  Coordinator.bulkCreate(coordinatorData, { individualHooks: true });

module.exports = seedCoordinators;
