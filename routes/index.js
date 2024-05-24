const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Greetings and salutations!',
    user: 'Kenny Winker',
    added: new Date()
  },
  {
    text: 'I want to get off Mr. Bones\' Wild Ride.',
    user: 'Guest 471',
    added: new Date() 
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Post a message' });
});

router.post('/new', function(req, res, next) {
  const username = req.body.username;
  const message = req.body.message;
  messages.push({text: message, user: username, added: new Date()});
  res.redirect('/');
});

module.exports = router;
