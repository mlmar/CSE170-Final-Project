var users = require("../data/users.json");

exports.view = function(req, res) {
  res.render('profile', {
    name: req.session.name,
    username: req.session.username,
    year: req.session.year,
    major: req.session.major
  })
}

exports.update = function(req, res) {
  var user = req.session.username;
  users[user].year = req.body.year;
  users[user].major = req.body.major;
  req.session.year = req.body.year;
  req.session.major = req.body.major;
  res.send({ updated : true });
}