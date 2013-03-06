# express-stickyforms

version **1.0.0**


## Dependencies

    npm install express@3.x.x

Your `express` application also needs to have `session` and `bodyParser` support.


## Installation
    npm install express-stickyforms


## Usage

### app.js

    var express = require('express')
      , app = express()
      ;
    
    var path = require('path');
    
    app.set('views', __dirname);
    app.set('view engine', 'jade');
    app.set('port', 3000);
    app.use(express.bodyParser());
    app.use(express.cookieParser('super secret'));
    app.use(express.session());
    //
    // Position matters.
    //
    app.use(require('express-stickyforms'));
    
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.get('/', function(req, res) {
      res.render('index');
    });
    
    app.post('/', function(req, res) {
      //
      // Tell your app that you want to be able to
      // redisplay the user's inputs for this form.
      req.sticky();
      
      res.redirect('/');
    });
    
    require('http').createServer(app).listen(app.get('port'), function() {
      console.log('stickyforms app running on port %d.', app.get('port'));
    });


### index.jade

    !!!
    html
      head
        title stickyforms example

      body
        form(action='/', method='post')
          label(for='username') Username
          
          //- #{sticky.username || ''}
          //- It would be wise to structure your stickys like
          //- so to avoid template errors.
          input#username(type='text', name='username', value='#{sticky.username || ''}')
          
          label(for='password') Password
          //- You should never sticky a password field!
          //- Doing so opens your site up to security risks.
          input#password(type='password', name='password')
          button(type='submit') Sign in


## License

Copyright (C) 2013 Emilio Testa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


