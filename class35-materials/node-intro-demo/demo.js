const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  fs.readFile('demofile.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.end('File not found')
      return
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(data)
  })
}).listen(8000, () => {
  console.log('Server running on http://localhost:8000')
})