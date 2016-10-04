var http = require('http')
var httpServer = http.createServer(requestHandler)
var fs = require('fs')
var io = require('socket.io')(httpServer)
var p2p = require('socket.io-p2p-server').Server
io.use(p2p)

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

function requestHandler (req, res) {
  if (req.url === '/static/bundle.js') {
    serveUpFile(req, res, './static/bundle.js')
  } else {
    serveUpFile(req, res, './index.html')
  }
}

io.on('connection', function (socket) {
  console.log('client connected to the server')

  socket.on('peer-msg', function (data) {
    console.log('Message from peer %s', data)
    socket.broadcast.emit('peer-msg', data)
  })

  socket.on('disconnect', function () {
    console.log('client disconnected from the server')
  })
})
