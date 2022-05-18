const { Coordinator } = require("../models");

const coordinatorData = [
  {
    username: "alede0lough",
    email: "nwestnedge0@cbc.ca",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "smonjwilway1",
    email: "rmebes1@sogou.com",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "am2djir",
    email: "cstoneman2@last.fm",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "nmer3mspr",
    email: "ihellier3@goo.ne.jp",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "i4ibodd",
    email: "gmidgley4@weather.com",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "dstaague5",
    email: "larnout5@imdb.com",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "tpennigens6",
    email: "hnapleton6@feedburner.com",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "ell7mper",
    email: "kperigo7@china.com.cn",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "ns8jmacar",
    email: "lmongain8@google.ru",
    password: "password123",
    organization: "Neal Productions",
  },
  {
    username: "msabbithur9",
    email: "bsteen9@epa.gov",
    password: "password123",
    organization: "Neal Productions",
  },
];

const seedCoordinators = () =>
  Coordinator.bulkCreate(coordinatorData, { individualHooks: true });

module.exports = seedCoordinators;
