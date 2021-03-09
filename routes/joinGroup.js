var groups = require("../data/groups.json")

/* 
  joinpage html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  var id = req.params.id;
  var user = req.session.username;
  var userGroups = groups.joined[user];
  var showGroups = groups.example.filter(g => userGroups.indexOf(g.id) === -1 && g.classURL === id);

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
  groups.example[groupID].members.push(user);
  groups.joined[user].push(groupID);
  res.send({ joined : true });
}