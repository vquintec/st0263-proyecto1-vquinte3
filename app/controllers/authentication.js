var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

var config = require('../../config/config');

var passport = require('passport');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/signup', function (req, res, next) {
  res.render('signup', {
    title: "Sign Up",
    baseUrl: config.baseUrl
  });
});

router.post('/signup', function (req, res) {
  console.log(req.body);
  user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password
  });
  User.create(user, function (err, user) {
    if(err)
      res.send(err);
    req.login(user, function () {
      res.redirect('/auth/profile');
    });
  });
});

/*router.post('/signup', function (req, res, next) {
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

  res.redirect(config.baseUrl + 'login');

});*/

router.get('/login', function (req, res, next) {
    res.render('login', {
      title: 'Log In',
      baseUrl: config.baseUrl
    });
});

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/'
}), function (req, res) {
  res.redirect('/auth/profile');
});


router.get('/auth/profile', function (req, res) {
    console.log('PROFILE');
    res.json(req.user);

});

