var info = require("../data/user.json");
var classes = require("../data/classes.json");
var posts = require("../data/posts.json");
var groups = require("../data/groups.json");

/* 
  classPage html route 
    {req} : contains class id param, page param and user param
    {res} : server response to display appropriate page
*/
exports.view = function(req, res) {
  var id = req.params.id;
  var c = classes.classes[id];

  res.render('classPage', {
    title: c.title,
    url: c.url,
    posts: posts[c.title],
    user: info.user.username
  });
}

exports.viewGroups = function(req, res) {
  var id = req.params.id;
  var userGroups = groups.joined.length > 0 ? groups.joined : null;

  res.render('groups', {
    title: classes.classes[id].title,
    url: classes.classes[id].url,
    groups: userGroups
  });
}

exports.post = function(req, res) {
  var id = req.body.id;
  var selectedClass = classes.classes[id].title;
  var userPost = req.body.userPost;
  if(!posts[selectedClass]) {
    posts[selectedClass] = [];
  }
  posts[selectedClass].unshift(userPost);
}