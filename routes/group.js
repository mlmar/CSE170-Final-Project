var users = require("../data/users.json");
var groups = require("../data/groups.json");

exports.view = function(req, res) {
  var classID = req.params.id;
  var groupID = req.params.group;

  var members = groups.example[groupID].members.map(m => users[m]);

  res.render('group',  { group : groups.example[groupID], members : members, id : classID });
}