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
  var joined = classes.joined[user].indexOf(c.url) !== -1;

  res.render('classPage', {
    title: c.title,
    url: c.url,
    posts: posts[c.title],
    user: req.session.username,
    displayName: req.session.name,
    joined: joined
  });
}

// render groups
exports.viewGroups = function(req, res) {
  var user = req.session.username;
  if(!groups.joined[user]) {
    groups.joined[user] = [];
  }

  var id = req.params.id;
  var userGroups = groups.joined[user].length > 0 ? getUserClassGroups(user, id) : null;

  res.render('groups', {
    title: classes.classes[id].title,
    url: classes.classes[id].url,
    groups: userGroups
  });
}

// route to make a post to the class feed
exports.post = function(req, res) {
  var id = req.body.id;
  var selectedClass = classes.classes[id].title;
  
  if(!posts[selectedClass]) {
    posts[selectedClass] = [];
  }

  var postID = posts[selectedClass].length + "";

  var userPost = { name: req.session.name, text: req.body.userPost.text, id: postID, comments : [] };
  posts[selectedClass].push(userPost);

  res.send({ postID:  postID});
}

exports.comment = function(req, res) {
  var id = req.body.id;
  var postID = req.body.postID;
  var text = req.body.text;

  var c = classes.classes[id].title;
  posts[c][postID].comments.push({ name : req.session.name, text: text})

  res.send({ finished : true });
}

exports.viewPost = function(req, res) {
  var id = req.params.id;
  var postID = req.params.postID;
  var c = classes.classes[id].title;

  res.render('postThread', { url : id, post : posts[c][postID], displayName: req.session.name });
}

// render members page
exports.viewList = function(req, res) {
  var id = req.params.id;
  res.render('list', {
    url: classes.classes[id].url,
    members: getMembers(id)
  });
}

// function to get members from a fetch request
exports.members = function(req,res) {
  var id = req.params.id;
  var user = req.session.username;
  var members = getMembers(id, user);
  res.send({ members : members});
}

// function to get members from a post request, filtering out specified usernames
exports.filterMembers = function(req,res) {
  var id = req.params.id;
  var groupID = req.body.groupID;
  var user = req.session.username;
  var members = getMembers(id, user);


  var groupMembers = groups.example[groupID].members;

  console.log(groupMembers);

  members = members.filter(m => groupMembers.indexOf(m.username) === -1);

  res.send({ members : members});
}



function getUserClassGroups(user, id) {
 return groups.example.filter(g => groups.joined[user].indexOf(g.id) !== -1 && g.classURL === id);
}

function getMembers(id, user) {
  var userIDS = []
  
  classes.classes[id].members.forEach(m => {
    if(m !== user) {
      userIDS.push(users[m]) 
    }
  });

  return userIDS;
}