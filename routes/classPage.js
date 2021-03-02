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
    user: req.session.username
  });
}

exports.viewGroups = function(req, res) {
  var user = req.session.username;
  if(!groups.joined[user]) {
    groups.joined[user] = [];
  }

  var id = req.params.id;
  var userGroups = groups.joined[user].length > 0 ? groups.joined[user] : null;

  res.render('groups', {
    title: classes.classes[id].title,
    url: classes.classes[id].url,
    groups: userGroups
  });
}

exports.post = function(req, res) {
  var id = req.body.id;
  var selectedClass = classes.classes[id].title;
  var userPost = { name: req.session.username, text: req.body.userPost.text };
  if(!posts[selectedClass]) {
    posts[selectedClass] = [];
  }
  posts[selectedClass].unshift(userPost);
}

exports.viewList = function(req, res) {
  var id = req.params.id;

  res.render('list', {
    url: classes.classes[id].url,
  });
}