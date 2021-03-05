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

  if(groups.example[groupID].members.length === 0) {
    groups.example = groups.example.filter(g => g.id !== groupID);
  }

  res.send({ finished : true });
}

exports.updateMembers = function(req, res) {
  var groupID = req.body.groupID;
  var addedMembers = req.body.addedMembers;

  addedMembers.forEach(element => {
    groups.example[groupID].members.push(element);
    groups.joined[element].push(groupID);
  });

  var members = groups.example[groupID].members.map(m => users[m]);
  res.send({ members : members})
}