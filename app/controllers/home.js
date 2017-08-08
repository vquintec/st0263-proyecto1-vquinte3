var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'YT2',
      articles: articles,
      baseUrl: config.baseUrl
    });
  });
});

router.post('/new-article', function (req, res, next) {
  newArticle = new Article({
    title: req.body.title,
    url: req.body.url,
    text: req.body.text
  });
  console.log(newArticle.date);
  newArticle.save(function(err) {
    if (err)
      res.send(err);

    //res.json({ message: newArticle.title + " created a playlist with email - " + newArticle.url + " - " + newArticle.text });
    res.redirect('/');
  });

});
