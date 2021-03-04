var users = require("../data/users.json");
var groups = require("../data/groups.json");

exports.view = function(req, res) {
  var classID = req.params.id;
  var groupID = req.params.group;

  var members = groups.example[groupID].members.map(m => users[m]);

  res.render('group',  { group : groups.example[groupID], members : members, id : classID });
}

exports.leaveGroup = function(req, res) {
  var user = req.session.username;
  var groupID = req.body.id;

  groups.joined[user] = groups.joined[user].filter(i => i !== groupID); 
  groups.example[groupID].members = groups.example[groupID].members.filter(member => member !== user);

  res.send({ finished : true });
}