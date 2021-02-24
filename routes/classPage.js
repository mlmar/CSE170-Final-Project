var info = require("../data/user.json")
var classes = require("../data/classes.json")
var posts = require("../data/posts.json")

/* 
  classPage html route 
    {req} : contains class id param, page param and user param
    {res} : server response to display appropriate page
*/
exports.view = function(req, res) {
  var id = req.params.id;
  var page = req.params.page;

  switch(page) {
    case "groups":
      res.render('groupspage', {
        title: classes.classes[id].title,
        url: classes.classes[id].url,
        user: info.user.username
      });
      break;

    default:
      res.render('classpage', {
        title: classes.classes[id].title,
        url: classes.classes[id].url,
        posts: posts.example,
        user: info.user.username
      });
  }
}