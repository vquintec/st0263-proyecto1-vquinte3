var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());



  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done){
    done(null, user);
  });

  passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    function(username, password, done) {
      User.findOne({ username: username }, function(err, userData) {
        if (!userData) {
          done(null, false, {message: 'User Not Found'});
        }
        else if(userData.password === password){
          var user = userData;
          console.log(user);
          done(null, user);
        } else {
          done(null, false, {message: 'Bad Password'});
        }

      });

    }
  ));

};
