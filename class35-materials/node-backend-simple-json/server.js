const http = require('http'); // http creates server
const fs = require('fs') // fs reads files
const url = require('url'); // requires url
const querystring = require('querystring'); // requires querystring
const figlet = require('figlet') // requires figlet, remember: some modules need to be installed, whereas node core modules such as http and fs do not, they're built-in

const server = http.createServer((req, res) => { // createServer registers a request handler; this function runs once per request, and async callbacks inside it complete later
  const page = url.parse(req.url).pathname; // this app is doing manual routing by parsing req.url into pathname and query params
  const params = querystring.parse(url.parse(req.url).query); // a method of querystring module, unsure what this does, but it's called params so that's the parameter we're working with
  console.log(page); // console logs the page we're currently on
  if (page == '/') { // if page index 
    fs.readFile('index.html', function(err, data) { // fs.readFile is async; Node keeps handling other requests while file is loading
      res.writeHead(200, {'Content-Type': 'text/html'}); // this runs later, after file read completes; now we can send response
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') { // else if page is /otherpage
    fs.readFile('otherpage.html', function(err, data) { // fs.readFile is async; Node keeps handling other requests while file is loading
      res.writeHead(200, {'Content-Type': 'text/html'}); // this runs later, after file read completes; now we can send response
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') { // else if page is /otherotherpage
    fs.readFile('otherotherpage.html', function(err, data) { // fs.readFile is async; Node keeps handling other requests while file is loading
      res.write(data); // this runs later, after file read completes; now we can send response
      res.end();
    });
  }
  else if (page == '/api') { // else if page is /api, returns JSON based on student query string, and defaults unknown values for non-leon.
    if('student' in params){ // if 'student' is parsed in in params argument
      if(params['student']== 'leon'){ // and that 'student' is 'leon'...
        res.writeHead(200, {'Content-Type': 'application/json'}); // write the jsonified object
        const objToJson = { // object properties, key value pairs 
          name: "leon", 
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){ // if student isn't 'leon'
        res.writeHead(200, {'Content-Type': 'application/json'}); // write object with unknown for each key value pair
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){ // unsure, seems to write data if css page
    fs.readFile('css/style.css', function(err, data) { // fs.readFile is async; Node keeps handling other requests while file is loading
      res.write(data); // this runs later, after file read completes; now we can send response
      res.end();
    });
  }else if (page == '/js/main.js'){ // unsure, seems to write data if js page
    fs.readFile('js/main.js', function(err, data) { // fs.readFile is async; Node keeps handling other requests while file is loading
      res.writeHead(200, {'Content-Type': 'text/javascript'}); // this runs later, after file read completes; now we can send response
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) { // run figlet, async 
      if (err) { // response is sent only when callback returns generated text
          console.log('Something went wrong...'); // log this
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000); // listening on an 8000 server response


/* 

const http = require('http'); // Built-in Node module for creating HTTP servers
const fs = require('fs'); // Built-in Node module for reading files
const figlet = require('figlet'); // External package for ASCII-art text (used for 404 output)

// Reusable helper for serving static files (HTML/CSS/JS)
function sendFile(res, filePath, contentType) {
  // Async file read: callback runs after file is loaded (or fails)
  fs.readFile(filePath, (err, data) => {
    // If file read fails, fall back to 404 response
    if (err) return send404(res);

    // Send successful response with appropriate content type
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

// Reusable helper for JSON API responses
function sendJSON(res, obj, status = 200) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj)); // Convert JS object into JSON string
}

// Reusable helper for "not found" responses
function send404(res) {
  // Async call: generate stylized "404!!" text
  figlet('404!!', (err, data) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    // If figlet fails, still send a plain fallback 404 message
    res.end(err ? '404 Not Found' : data);
  });
}

// createServer registers one request handler that runs per incoming request
http.createServer((req, res) => {
  // Parse incoming URL into pathname + query params using the request host
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Route requests by pathname
  switch (pathname) {
    case '/':
      return sendFile(res, 'index.html', 'text/html');
    case '/otherpage':
      return sendFile(res, 'otherpage.html', 'text/html');
    case '/otherotherpage':
      return sendFile(res, 'otherotherpage.html', 'text/html');
    case '/css/style.css':
      return sendFile(res, 'css/style.css', 'text/css');
    case '/js/main.js':
      return sendFile(res, 'js/main.js', 'text/javascript');

    case '/api': {
      // Read `student` from query string, e.g. /api?student=leon
      const student = parsedUrl.searchParams.get('student');

      // Build response data based on query value
      const data = student === 'leon'
        ? { name: 'leon', status: 'Boss Man', currentOccupation: 'Baller' }
        : { name: 'unknown', status: 'unknown', currentOccupation: 'unknown' };

      return sendJSON(res, data);
    }

    // Any unmatched path gets a 404
    default:
      return send404(res);
  }
}).listen(8000); // Start server on port 8000

*/