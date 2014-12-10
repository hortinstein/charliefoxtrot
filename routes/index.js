var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/post-card.html', function(req, res) {
  res.render('elements/post-card', { title: 'Express' });
});
router.get('/post-list.html', function(req, res) {
  res.render('elements/post-list', { title: 'Express' });
});
router.get('/post-service/post-service.html', function(req, res) {
  res.render('elements/post-service', { title: 'Express' });
});


router.get('/api/posts.json', function (req,res) {
  res.json([
  {
    "uid": 1,
    "text" : "Have you heard about the Web Components revolution?",
    "username" : "Eric",
    "avatar" : "../images/avatar-01.svg",
    "favorite": false
  },
  {
    "uid": 2,
    "text" : "Loving this Polymer thing.",
    "username" : "Rob",
    "avatar" : "../images/avatar-02.svg",
    "favorite": false
  },
  {
    "uid": 3,
    "text" : "Loving this Polymer thing.",
    "username" : "Rob",
    "avatar" : "../images/avatar-02.svg",
    "favorite": false
  },{
    "uid": 3,
    "text" : "Loving this Polymer thing.",
    "username" : "Rob",
    "avatar" : "../images/avatar-02.svg",
    "favorite": false
  }])
});



module.exports = router;
