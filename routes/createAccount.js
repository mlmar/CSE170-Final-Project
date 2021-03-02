var users = require("../data/users.json");

exports.view = function(req, res) {
  res.render('createAccount');
}

exports.signup = function(req, res) {
  req.session.name = req.body.name;
  req.session.username = req.body.username;
  req.session.year = req.body.year;
  req.session.major = req.body.major;

  users[req.session.username] = req.body;

  res.redirect('/')
}