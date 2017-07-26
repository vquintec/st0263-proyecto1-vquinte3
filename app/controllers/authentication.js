var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/signup', function (req, res, next) {
  res.render('signup', {
    title: "Sign Up"
  });
});

router.post('/signup', function (req, res, next) {
  user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password
  });
  console.log(user);
  user.save(function(err) {
    if(err)
      res.send(err);
  });

  res.redirect('/login');

});

router.get('/login', function (req, res, next) {
  console.log(req.query.error);
  if(req.query.error == undefined)
    res.render('login', {
      title: 'Log In',
      error: ''
    });
  else
    res.render('login' ,{
      title: 'Log In',
      error: 'Bad Credentials'
    })
});

router.post('/login', function (req, res, next) {
  User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
    if(err)
      res.send(err)
    if(user == null)
      res.redirect('/login?error');
    else
      res.redirect('/home');

  });
});
