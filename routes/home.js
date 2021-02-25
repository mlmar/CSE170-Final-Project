var info = require("../data/user.json")
var classes = require("../data/classes.json")

exports.view = function(req, res) {
  res.render('home', { user: info.user.username, classes: classes.joined });
}