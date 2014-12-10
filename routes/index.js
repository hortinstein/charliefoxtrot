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
    "text" : "  stub",
    "username" : "CoreOS1",
    "avatar" : "http://oo.or.id/sites/default/files/field/image/coreos-logo.png",
    "favorite": false
  },
  {
    "uid": 2,
    "text" : "  stub",
    "username" : "CoreOS2",
    "avatar" : "http://oo.or.id/sites/default/files/field/image/coreos-logo.png",
    "favorite": false
  },
  {
    "uid": 3,
    "text" : "  stub",
    "username" : "CoreOS3",
    "avatar" : "http://oo.or.id/sites/default/files/field/image/coreos-logo.png",
    "favorite": false
  },{
    "uid": 3,
    "text" : "  stub",
    "username" : "CoreOS4",
    "avatar" : "http://oo.or.id/sites/default/files/field/image/coreos-logo.png",
    "favorite": false
  }])
});



module.exports = router;
