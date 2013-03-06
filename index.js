module.exports = function(req, res, next) {

  if (typeof req.session.sticky === 'undefined') {
    res.locals.sticky = {};
  } else {
    res.locals.sticky = req.session.sticky;
    delete req.session.sticky;
  }

  req.sticky = function() {
    req.session.sticky = req.body;
  };

  next();

};
