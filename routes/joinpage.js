var classes = require("../data/classes.json");

/* 
  joinpage html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  res.render('joinpage');
}

exports.join = function(req, res) {
  var id = req.params.id;
  var user = req.params.user;
  classes.classes.push({
    "number": "123",
    "title": "test",
    "url": "100"
  })

  res.redirect(`/${user}/home`);
}