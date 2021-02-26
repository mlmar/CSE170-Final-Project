var classes = require("../data/classes.json")

exports.view = function(req, res) {
  var user = req.session.username;
  if(!classes.joined[user]) {
    classes.joined[user] = [];
    classes.joined[user].push(classes.classes[0]);
  }

  res.render('home', { user: user, classes: classes.joined[user] });
}