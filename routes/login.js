var info = require ("../data/user.json");

/*
  Receives username and password from login page
  TODO: validation for wizard of oz login
  Then redirects user to their home page

    {req} : contains username and password query
    {res} : sends back homepage
*/
exports.login = function(req, res) {
  var username= req.body.username;
  var password = req.body.password;

  info.user.username = username;

  // if(username === info.wizard.username && password === info.wizard.password) {
    res.redirect('/home');
  // }
}
