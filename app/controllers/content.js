var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Video = mongoose.model('Video');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/videos', function (req, res, next) {
  Video.find(function (err, videos) {
    if (err) return next(err);
    res.render('videos', {
      title: 'Videos',
      videos: videos
    });
  });
});

router.get('/search', function (req, res, next) {
  Video.find({title:new RegExp(req.query.query)},function(err, videos) {
    if (err) return next(err);
    res.render('videos', {
      title: 'Videos',
      videos: videos
    });
  });
});

router.get('/upload-video', function (req, res, next) {
  res.render('upload', {
    title: 'Upload video'
  });
});

router.post('/upload-video', function (req, res, next) {
  video = new Video({
    title: req.body.title,
    description: req.body.description,
    username: "5978a34e7ed6ce189e503170",
    category: req.body.category,
    tags: req.body.tags
  });

  video.save(function (err) {
    if(err)
      res.send(err);

    res.redirect('/my-videos');
  });

});

router.get('/my-videos', function (req, res, next) {
  Video.find(function (err, videos) {
    if (err) return next(err);
    res.render('myvideos', {
      title: 'My videos',
      videos: videos
    });
  });
});


router.get('/delete-video', function (req, res, next) {
  res.redirect('/delete')
});

router.delete('/delete-video/:id', function (req, res, next) {
  Video.findByIdAndRemove(req.params.id, function (err, video) {
    if(err) return next(err);
    res.end("Se elimino " + req.params.id);
  });
});

router.get('/edit-video', function (req, res, next){
  Video.findOne({ _id: req.query.id }, function (err, video) {
    if(err)
      res.send(err)
    res.render('edit-video', {
      title: "Edit Video",
      video: video
    });

  });
});

router.post('/edit-video', function (req, res, next) {
  videoUpdated = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    category: req.body.category,
    tags: req.body.tags
  };
  console.log(videoUpdated);

  Video.findByIdAndUpdate(req.params.idVideo, { $set: videoUpdated}, { new: true }, function (err, video) {
    if (err) return next(err);
    res.send(video);
  });
});

router.get('/test/:id', function(req, res, next){
  Video.findOne({_id:'5978bd7de12b582430aed75c'}, function (err, video) {
    if (err) return next(err);
    res.send({
      title: 'Videos',
      video: video
    });
  });
});
