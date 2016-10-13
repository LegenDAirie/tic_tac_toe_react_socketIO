var http = require('http')
var httpServer = http.createServer(requestHandler)
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

function requestHandler (req, res) {
  if (req.url === '/static/bundle.js') {
    serveUpFile(req, res, './static/bundle.js')
  } else {
    serveUpFile(req, res, './index.html')
  }
}

io.on('connection', function (socket) {
  console.log('socket connected to the server')

  console.log(Object.keys(io.sockets.connected).length, ' clients connected')

  socket.leave(socket.id)
  socket.myRoom = null

  // socket.join(Math.random() + '', function () {
  //   console.log(socket.rooms)
  // })

  console.log('socket ID: ', socket.id)
  console.log('users: ', Object.keys(io.sockets.connected))
  console.log('availableUsers: ', getAvailableUsers())
  console.log('rooms: ', Object.keys(socket.adapter.rooms))
  console.log('joining available user in new room')
  console.log('-----before joining-----')
  joinAvailableUser(socket, function afterJoined() {
    console.log('-----after joining-----')
    console.log('-----------------------------------------------------------------')
    console.log('users: ', Object.keys(io.sockets.connected))
    console.log('availableUsers: ', getAvailableUsers())
    console.log('rooms: ', Object.keys(socket.adapter.rooms))
    console.log('-----------------------------------------------------------------')
  })


  socket.on('hello', function (data) {
    if (socket.myRoom) {
      io.to(socket.myRoom).emit('hello', data)
    }
  })

  socket.on('disconnect', function () {
    console.log('socket disconnected from the server')
  })
})


var getAvailableUsers = function () {
  var users = io.sockets.connected
  var userIDs = Object.keys(users)

  var availableUsers = userIDs.filter(function (id) {
    return users[id].myRoom === null
  })

  return availableUsers
}

var joinAvailableUser = function (socket, callBack) {
  var availableUserIDs = getAvailableUsers()
  var validUserIDs = availableUserIDs.filter( function (userID) {
    return socket.id !== userID
  })

  var firstUserID = validUserIDs.shift()

  if (firstUserID) {
    var roomName = firstUserID + socket.id, callBack
    var partner = io.sockets.connected[firstUserID]
    socket.myRoom = roomName
    partner.myRoom = roomName

    socket.join(roomName, callBack)
    partner.join(roomName, callBack)
  }
}
