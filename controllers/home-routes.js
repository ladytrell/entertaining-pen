const router = require("express").Router();
const { Band } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
  res.render("homepage");
});

// giving you the login and signup route pieces below, no changes needed.
router.get("/login", (req, res) => {
  console.log(req.session.isBand);
  if (req.session.loggedIn) {
    if (req.session.isBand) {
      res.redirect("/bands");
    } else {
      res.redirect("/coordinators");
    }
  }

  res.render("login");
});

router.get("/find-band", async (req, res) => {
  res.render("find-band");
});
/*
// get single post
router.get('/post/:id', async (req, res) => {
  try {
    // what should we pass here? we need to get some data passed via the request body (something.something.id?)
    // change the model below, but not the findByPk method.
    const postData = await SomeModel.findByPk(????, {
      // helping you out with the include here, no changes necessary
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      // serialize the data
      const post = postData.get({ plain: true });
      // which view should we render for a single-post?
      res.render('hmmmm what view should we render?', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
*/
module.exports = router;
