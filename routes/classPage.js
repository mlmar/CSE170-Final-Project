var users = require("../data/users.json");
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

  var user = req.session.username;
  var userClassIds = classes.joined[user];
  var joined = userClassIds.indexOf(c.url) !== -1;
  console.log(joined);

  res.render('classPage', {
    title: c.title,
    url: c.url,
    posts: posts[c.title],
    user: req.session.username,
    joined: joined
  });
}

exports.viewGroups = function(req, res) {
  var user = req.session.username;
  if(!groups.joined[user]) {
    groups.joined[user] = [];
  }

  var id = req.params.id;
  var userGroups = groups.joined[user].length > 0 ? groups.example.filter(g => groups.joined[user].indexOf(g.id) !== -1 && g.classURL === id) : null;

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

  var members = classes.classes[id].members.map(m => users[m]);

  res.render('list', {
    url: classes.classes[id].url,
    members: members
  });
}