const router = require("express").Router();
const { User } = require("../../models");
const { Band } = require("../../models");
const { Coordinator } = require("../../models");
const withAuth = require("../../utils/auth");

// GET / api / users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post("/", (req, res) => {  
  
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
    coordinator_id: null,    
    band_id: null
  })
    .then(async (dbUserData) => {
      if(dbUserData.role === 'band'){
        const bandData = await Band.create({
          bandname: req.body.bandName,
          email: req.body.bandEmail,
        });
        if(bandData) {
          await User.update(
            {
              band_id: bandData.dataValues.id,
            },
            {
              where: {
                id: dbUserData.id,
              },
            }
          );
        }
      } else {
        const coordinatorData = await Coordinator.create({
          organization: req.body.organization,
        });
        if(coordinatorData) {
          await User.update(
            {
              coordinator_id: coordinatorData.dataValues.id,
            },
            {
              where: {
                id: dbUserData.id,
              },
            }
          );
        }
      }
      //console.log("userUserData", dbUserData);
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        res.json(dbUserData.dataValues);

        if(dbUserData.role === 'band'){
          req.session.isBand = true;
          req.session.isCoordinator = false;
        } else {
          req.session.isBand = false;
          req.session.isCoordinator = true;
        }
      });
    //organization: req.body.organization
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users/login
router.post("/login", (req, res) => {
  console.log("api login");
    User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(async (dbUserData) => {
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "No user found with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
   // console.log("dbUserData", dbUserData);
    console.log("dbUserData.role", dbUserData.role);
    await req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      if(dbUserData.role === 'band'){
        req.session.isBand = true;
        req.session.isCoordinator = false;
        req.session.bandID = dbUserData.band_id;
      } else {
        req.session.isBand = false;
        req.session.isCoordinator = true;
      }

      res.json({
        user: dbUserData,
        message: "You are now logged in!",
      });
    });
  });
});

//PUT /api/users/
router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE /api/users/1
router.delete("/:id", withAuth, (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users/logout
router.post("/logout", withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
