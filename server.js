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

  socket.emit('connected', 'Hi I am ' + socket.id)


  socket.leave(socket.id)
  // var myRoom
  var partner

  // socket.join(Math.random() + '', function () {
  //   console.log(socket.rooms)
  // })

  getCurrentStats(socket, 'about to connect')
  joinAvailableUser(socket, function afterJoined() {
    // myRoom = socket.myRoom
    partner = socket.partner
    getCurrentStats(socket, 'joined a room')
  })

  socket.on('gtfo', function () {
    socket.leave(socket.myRoom, function (data) {
      // socket.partner.leave(socket.myRoom)
      partner.leave(partner.myRoom)
      // console.log(data)
      // partner.myRoom = null
      // partner.partner = null
      // myRoom = socket.myRoom = null
      // partner = socket.partner = null

      getCurrentStats(socket, 'left room')
    })
  })

  socket.on('hello', function (data) {
    if (socket.myRoom) {
      io.to(socket.myRoom).emit('hello', data)
    }
  })

  socket.on('disconnect', function () {
    partner.leave(partner.myRoom, function () {
      getCurrentStats(partner, 'partner disconnected')

    })
    // if (partner) {
    //   partner.leave(myRoom, function (data) {
    //     console.log(data)
    //     partner.myRoom = null
    //     partner.partner = null
    //     myRoom = null
    //     partner = null
    //
    //     getCurrentStats(socket, 'left room')
    //   })
    // }

    console.log('socket disconnected from the server')
  })
})

function getCurrentStats(socket, whatsHappening) {
  console.log('-----------------------------------------------------------------')
  console.log(whatsHappening)
  console.log('socket ID: ', socket.id)
  console.log('users: ', Object.keys(io.sockets.connected))
  console.log('availableUsers: ', getAvailableUsers())
  console.log('numbers of rooms: ', Object.keys(socket.adapter.rooms).length)
  console.log('rooms IDs: ', Object.keys(socket.adapter.rooms))
  console.log('room: ', socket.adapter.rooms)
  console.log('-----------------------------------------------------------------')

}

var getAvailableUsers = function () {
  var users = io.sockets.connected
  var userIDs = Object.keys(users)

  var availableUsers = userIDs.filter(function (id) {
    return !users[id].myRoom
  })

  return availableUsers
}

var joinAvailableUser = function (socket, callBack) {
  var availableUserIDs = getAvailableUsers()
  var validUserIDs = availableUserIDs.filter( function (userID) {
    return socket.id !== userID
  })

  var firstUserID = validUserIDs.shift()
  var partner = io.sockets.connected[firstUserID]
  connectUsers(socket, partner, callBack)
}

var connectUsers = function (socket, partner, callBack) {
  if (partner) {
    var roomName = socket.id + partner.id
    socket.partner = partner
    partner.partner = socket
    socket.myRoom = roomName
    partner.myRoom = roomName

    socket.join(roomName, callBack, function (data){console.log(data)})
    partner.join(roomName, callBack, function (data){console.log(data)})
  }
}
