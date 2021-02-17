var classes = require("../data/classes.json")
var posts = require("../data/posts.json")

/* 
  classPage html route 
    {req} : contains class id param
    {res} : server response
*/
exports.view = function(req, res) {
  var id = req.params.id;
  var page = req.params.page;

  if(!page) {
    res.render('classPage', {
      title: classes.classes[id].title,
      url: classes.classes[id].url,
      posts: posts.example
    });
  } else {
    res.render('classPage', {
      title: classes.classes[id].title,
      url: classes.classes[id].url
    });
  }

}