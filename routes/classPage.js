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

  res.render('classPage', {
    title: classes.classes[id].title,
    url: classes.classes[id].url,
    posts: posts.example,
    user: info.user.username
  });
}

exports.viewGroups = function(req, res) {
  var id = req.params.id;

  var userGroups = groups.joined.length > 0 ? groups.joined : null;
  console.log(groups.joined);

  res.render('groups', {
    title: classes.classes[id].title,
    url: classes.classes[id].url,
    groups: userGroups
  });
}

exports.post = function(req, res) {
  posts.example.unshift(req.body);
}