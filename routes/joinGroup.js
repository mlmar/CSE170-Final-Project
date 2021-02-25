var groups = require("../data/groups.json")

/* 
  joinpage html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  res.render('joinGroup', { groups: groups.example, id: req.params.id });
}

exports.viewGroup = function(req, res) {
  var groupID = req.params.group;
  var group = groups.example[groupID];
  res.render("requestGroup", group)
}

exports.join = function(req, res) {
  var groupID = req.body.id;
  var groupToJoin = groups.example[groupID];
  if(groups.joined.indexOf(groupToJoin) === -1)
    groups.joined.push(groupToJoin);
}