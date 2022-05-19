const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
<<<<<<< HEAD
const env = require("dotenv").config();
=======
>>>>>>> 64f2ba16b262673684a5798bca6ac59bfddb7c3b

const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
const sequelize = require("./config/config.js");
=======
const sequelize = require("./config/config");
>>>>>>> 64f2ba16b262673684a5798bca6ac59bfddb7c3b
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/"));

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}!`);
  await sequelize.sync({ force: false });
});
