var groups = require("../data/groups.json")

/* 
  joinpage html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  var user = req.session.username;
  var userGroups = groups.joined[user];

  var showGroups = groups.example.filter(g => userGroups.indexOf(g) === -1);

  res.render('joinGroup', { groups: showGroups, id: req.params.id });
}

exports.viewGroup = function(req, res) {
  var groupID = req.params.group;
  var group = groups.example[groupID];
  res.render("requestGroup", group)
}

exports.join = function(req, res) {
  var user = req.session.username;
  var groupID = req.body.id;
  var groupToJoin = groups.example[groupID];
  if(groups.joined[user].indexOf(groupToJoin) === -1)
    groups.joined[user].push(groupToJoin);
}