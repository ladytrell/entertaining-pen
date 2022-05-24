const router = require('express').Router();
const { Band } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  if (req.session.loggedIn) {   
  console.log('req.session.isBand', req.session.isBand);    
  }
  res.render('homepage');  
});

// giving you the login and signup route pieces below, no changes needed.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {  
  console.log(req.session.isBand);    
    if (req.session.isBand) {
      res.redirect('/bands');
    } else {
        res.redirect('/coordinators');
    }
  }

  res.render('login');
});

// get single post
router.get('/lyric-search', async (req, res) => {
  res.render('lyricsearch');
});

/*
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});
*/
module.exports = router;
