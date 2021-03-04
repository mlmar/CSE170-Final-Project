var classes = require("../data/classes.json")

exports.view = function(req, res) {
  var user = req.session.username;
  if(!classes.joined[user]) {
    classes.joined[user] = [];
  }

  var userClasses = classes.joined[user].map(c => classes.classes[c]);

  res.render('home', { user: user, classes: userClasses});
}