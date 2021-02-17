var classes = require("../data/classes.json")
var posts = require("../data/posts.json")

/* 
  classPage html route 
    {req} : contains class id param
    {res} : server response
*/
exports.view = function(req, res) {
  var id = req.params.id;
  res.render('classPage', {
    title: classes.classes[id].title,
    posts: posts.example
  });
}