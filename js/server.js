/*
Custom 404 page served by Node.js backend Express router:
All routes that do not match a file instead produce 'missing-page.html'
*/

// require the Express to run the Node server
var express = require('express'),
    app = express(),
    port = 3000;

// set static router to retrieve HTML, CSS, JS, Images
app.use(express.static(__dirname));

// set 404 error path to custom file
app.error(function(err, req, res, next){
  if (err instanceof NotFound) {
    res.sendFile('ninja/missing-page.html');
  } else {
    next(err);
  }
});

// server listens on port 3000
app.listen( port, function() {
  console.log("Node server running on localhost:" + port);
} );