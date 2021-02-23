var classes = require("../data/classes.json")

/* 
  index html route 
    {req} : client request
    {res} : server response
*/
exports.view = function(req, res) {
  var user = req.params.user;
  res.render('homepage', { 
    classes: classes.classes,
    user: user
  });
}