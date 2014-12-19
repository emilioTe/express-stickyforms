# express-stickyforms

version **2.0.0**


## Dependencies
```
npm install express
```

**Note**: Your `express` application also needs to have `session` support.


## Installation
```
npm install express-stickyforms
```


## Usage

### app.js
```javascript

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var session = require("express-session");

var path = require("path");

app.set("views", __dirname);
app.set("view engine", "jade");
app.set("port", 3000);
app.use(bodyParser.urlencoded());
app.use(session());
//
// Position matters.
//
app.use(require("express-stickyforms")());
//
app.use(express.static(path.join(__dirname, "public")));



app.get("/", function(req, res) {
  
  //
  // Get a key from "sticky"
  // (returns `undefined` if not found)
  var stickiedValue = req.sticky.get("username");

  res.render("index");

});



app.post("/", function(req, res) {

  //
  // Tell your app that you want to be able to
  // redisplay the user's inputs for this form.
  req.sticky.them();
  
  res.redirect("/");

});



require("http").Server(app).listen(app.get("port"), function() {
  console.log("stickyforms app running on port %d.", app.get("port"));
});

```


### index.jade
```jade
doctype html
html
  head
    title stickyforms example

  body
    form(action="/", method="POST")
      label(for="username") Username
      
      input#username(type="text", name="username", value="#{sticky.username}")
      
      label(for="password") Password
      //- You should never sticky a password field!
      //- Doing so opens your site up to security risks.
      input#password(type="password", name="password")
      button(type="submit") Sign in

```


## License

Copyright (C) 2013 Emilio Testa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


