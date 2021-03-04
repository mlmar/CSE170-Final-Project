var groups = require("../data/groups.json");

exports.view = function(req, res) {
  res.render("createGroup", {
    url: req.params.id
  });
}

exports.create = function(req, res) {
  var user = req.session.username;

  var url = req.body.url;
  var name = req.body.name;
  var description = req.body.description;
  var contact = req.body.contact;
  var id = groups.example.length;
  var members = [];

  members.push(user);
  groups.joined[user].push(id);

  var group = { name, description, contact, id, members, classURL : url }
  groups.example.push(group);

  console.log(groups.example[id]);

  res.redirect(`/class/${url}/groups`)
}