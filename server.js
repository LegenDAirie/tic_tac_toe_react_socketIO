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

  socket.emit('connected', 'Hi I am ' + socket.id)

  //setup
  var partnerRef
  socket.leave(socket.id)
  socket.getPartner = function (partner) { // if socket is the one being connected to
    partnerRef = socket.partner = partner
    console.log(partnerRef + '////////////////////////////////////////////////')
  }

  getCurrentStats(socket, 'about to connect')

  socket.on('join room', function () {
    joinAvailableUser(socket, function afterJoined() {
      // if socket is the one connecting
      // console.log('I am ' + socket.id + ' and my partner is ' + socket.partner.id)
      partnerRef = socket.partner
      getCurrentStats(socket, 'joined a room')
    })
  })

  socket.on('leave room', function () {
    leaveRoom(socket, partnerRef)
  })

  socket.on('status', function () { // for testing broker logic
    getCurrentStats(socket, 'checking status')
  })

  socket.on('hello', function (data) {
    if (socket.myRoom) {
      io.to(socket.myRoom).emit('hello', data)
    }
  })

  socket.on('disconnect', function () {
    console.log('socket disconnected from the server')
    if (partnerRef) {
      partnerRef.leave(partnerRef.myRoom, function () {
        removePartnerReference (socket, partnerRef)
      })
    }
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

var leaveRoom = function (user, usersPartner) {
  user.leave(user.myRoom, function () {
    usersPartner.leave(usersPartner.myRoom, function() {
      removePartnerReference (user, usersPartner)

      getCurrentStats(user, 'left room')
    })
  })
}

var removePartnerReference = function (user, usersPartner) {
  user.myRoom = null
  user.partner = null
  usersPartner.myRoom = null
  usersPartner.partner = null
  usersPartner = null
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

    socket.join(roomName, callBack)
    partner.join(roomName)
    partner.getPartner(socket)
  }
}
