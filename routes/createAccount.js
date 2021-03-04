var users = require("../data/users.json");

exports.view = function(req, res) {
  res.render('createAccount');
}

exports.signup = function(req, res) {
  req.session.name = req.body.name;
  req.session.username = req.body.username;
  req.session.year = req.body.year;
  req.session.major = req.body.major;

  if(!users[req.body.username]) {
    users[req.session.username] = req.body;
    res.redirect('/')
  } else {
    res.redirect('/createAccount');
  }

}

exports.checkUsername = function(req, res) {
  var username = req.body.username;
  if(users[username]) {
    res.send({ taken : true });
  } else {
    res.send({ taken : false });
  }
}