var info = require("../data/user.json")

exports.view = function(req, res) {
  res.render("createGroup", { name: info.user.username, id: req.params.id });
}