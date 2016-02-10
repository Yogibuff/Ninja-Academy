// require express to run Node server on localhost:3000
var express = require('express'),
    app = express(),
    port = 3000;

// set static router to retrieve HTML, CSS, JS, Images
app.use(express.static(__dirname));

// set route to custom 404 Page, overrides default 404 server response
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/missing-page.html');
});

// server listens on port 3000
app.listen(port, function() {
  console.log('Node server running on localhost:' + port);
});