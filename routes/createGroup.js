exports.view = function(req, res) {
  res.render("createGroup", {
    name: req.session.name,
    username: req.session.username,
    year: req.session.year,
    major: req.session.major
  });
}