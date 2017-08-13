var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Video = mongoose.model('Video'),
  User = mongoose.model('User');

var config = require('../../config/config');
module.exports = function (app) {
  app.use('/videos', router);
};

router.get('/', function (req, res, next) {
  Video.find({ privacy: 'Public'})
    .populate('owner')
    .exec(function (err, fullVideoData) {
      if (err) res.send(err);

      console.log(fullVideoData);

      res.render('videos', {
        title: 'Videos',
        videos: fullVideoData,
        baseUrl: config.baseUrl
      });
    });
});

router.get('/search', function (req, res, next) {
  Video.find({title:new RegExp(req.query.query)},function(err, videos) {
    if (err) return next(err);
    res.render('videos', {
      title: 'Videos',
      videos: videos,
      baseUrl: config.baseUrl
    });
  });
});

router.get('/upload', function (req, res, next) {

  res.render('upload', {
    title: 'Upload video',
    baseUrl: config.baseUrl
  });
});

router.post('/upload', function (req, res, next) {
  console.log(req.body);
  video = new Video({
    title: req.body.title,
    description: req.body.description,
    owner: req.user._id,
    privacy: req.body.privacy,
    category: req.body.category,
    tags: req.body.tags
  });

  Video.create(video, function (err, video) {
    if(err)
      res.send(err);
    res.redirect(config.baseUrl + 'videos/me');
  });

});

router.get('/me', function (req, res, next) {
  Video.find({ owner: req.user._id}, function (err, videos) {
    if (err) res.send(err);
    res.render('myvideos', {
      title: 'My videos',
      videos: videos,
      baseUrl: config.baseUrl
    });
  });
});

router.get('/me/share', function (req, res) {
  Video.findOne({ _id: req.query.id })
    .populate('users')
    .exec(function (err, video) {
      if(err)
        res.send(err)
      res.render('share', {
        title: "Share",
        video: video,
        baseUrl: config.baseUrl
      });
    });
});

router.post('/me/share', function (req, res, next) {

  shares = [];

  User.findOne({ username: req.body.sUsername }, function (err, user) {
    if (err || !user) {
      res.redirect('/videos/me/share?id=598e576469fb9a15ce95972e&error');
      return next();
    }
    else {
      console.log("User to push " + user._id);

      Video.findByIdAndUpdate(req.body.idVideo, { $addToSet: {users : user._id}}, function (err, video) {
        if (err){
          console.log("Error: " + err);
          res.redirect('/videos/me/share?id=598e576469fb9a15ce95972e&error2');
          return next();
        }
        res.redirect('/videos/me');
        return next();
      });
    }
    //res.json(videoUpdated);
  });

  //res.end();

});


router.delete('/delete/:id', function (req, res, next) {
  Video.findByIdAndRemove(req.params.id, function (err, video) {
    if(err) return next(err);
    res.end("Se elimino " + req.params.id);
  });
});

router.get('/edit', function (req, res, next){
  Video.findOne({ _id: req.query.id })
    .populate('users')
    .exec(function (err, video) {
      if(err)
        res.send(err)
      console.log("Users population: " + video);
      res.render('edit-video', {
        title: "Edit Video",
        video: video,
        baseUrl: config.baseUrl
      });

  });
});

router.post('/edit', function (req, res, next) {
  videoUpdated = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    tags: req.body.tags
  };
  console.log(videoUpdated);
  console.log(req.body.idVideo);

  Video.findByIdAndUpdate(req.body.idVideo, { $set: videoUpdated}, { new: true }, function (err, video) {
    if (err) res.send(err);
    res.redirect('/videos/me')
  });
});

