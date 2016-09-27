var http = require('http')
var httpServer = http.createServer(handler)
var fs = require('fs')
var io = require('socket.io')(httpServer)

httpServer.listen(8000, 'localhost');

function serveUpFile(req, res, path) {
  fs.readFile(path.toString(), function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200)
    res.end(data)
  })
}

function handler (req, res) {
  if (req.url === '/static/bundle.js') {
    serveUpFile(req, res, './static/bundle.js')
  } else {
    serveUpFile(req, res, './index.html')
  }
}

io.on('connection', function (socket) {
  console.log('a user has connected to the server')

  socket.on('disconnect', function () {
    console.log('a user has disconnected from the server')
  })
})
