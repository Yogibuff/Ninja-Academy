//event listener Javascript for accordian expand when mouseover


//event listener to open accordian topic:2 id "collapse2" located on faq.html page when clicking the Teamwork "View details" link on home page

var accordian = document.getElementsByClassName('panel-heading');

panel-heading.addEventListener("click", /* [change to opened accordian via changing all divs with the id "collapse2" to class="panel-collapse collapse in"])

//repeat for div id "collapse3" when clicking the Weapons Training "View details" link on home page

//repeat for div id "collapse4" when clicking the Martial Arts "View details" link on home page (5 and 1 are already set to be open)






// 404 page redirect - all routes that do not match produce my 404 template 'missing-page.html' instead

app.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.sendFile('ninja/missing-page.html');
    } else {
        next(err);
    }
});

/* webserver code written in node.js */
/* needed to make the 404 page function properly, if the site was actually hosted online */

/* 
var http = require('http')
, url = require('url')
, fs = require('fs')
, path = require('path')
, server;

server = http.createServer(function(req,res){

  var myPath = url.parse(req.url).pathname;

    switch(myPath){

      case '/ninja':

        // get the extensions of the files inside this dir (.html, .js, .css)
        var extname = mypath.extname(path);

          switch (extname) {

            // get the html
            case '.html':
              fs.readFile(__dirname + '/ninja/index.html', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data, 'utf8');
                res.end();
              });
            break;

            // get the script that /ninja/chatclient.html references
            case '.js':
              fs.readFile(__dirname + '/ninja/js/script.js', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.end(content, 'utf-8');
                res.end();
              });
            break;

            // get the styles that /ninja/chatclient.html references
            case '.css':
              fs.readFile(__dirname + '/ninja/css/default.css', function (err, data) {
                if (err) return send404(res);  
                res.sendFile('ninja/missing-page.html', { 'Content-Type': 'text/javascript' }); //inserted custom 404-page instead of standard 404
                res.end(content, 'utf-8');
                res.end();
              });
          }
          break;

          default: send404(res);
        }
    });

    */