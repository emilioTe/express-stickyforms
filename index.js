module.exports = function() {

  return function(req, res, next) {

    var session = req.session;
    var sticky = session && session.sticky;
    var values = session && sticky && req.session.sticky._values;



    if (!values) {
    
      res.locals.sticky = {};

    } else {

      res.locals.sticky = values;
      delete req.session.sticky;

    }


    
    req.sticky = {
    
      them: function() { req.session.sticky = { _values: req.body }; },

      get: function(key) { return res.locals.sticky && res.locals.sticky[key]; }
    
    };

    
    next();

  };

};
