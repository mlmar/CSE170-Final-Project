var groups = require("../data/groups.json")

exports.view = function(req, res) {
  var classID = req.params.id;
  var groupID = req.params.group;

  res.render('group',  { group : groups.example[groupID], id : classID });
}