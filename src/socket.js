import io from 'socket.io-client'
const socket = io()
export default socket

socket.on('connected', function (data) {
  console.log(data)
  socket.ZZZk
})

socket.on('myPiece', function (piece) {
  console.log('myPiece is ' + piece)
})

socket.on('hello', function (data) {
  console.log(data)
})

window.gtfo = function () {
  socket.emit('leave room')
}

window.sayHi = function () {
  socket.emit('hello', "friend!")
}

window.getStatusPlz = function () {
  socket.emit('status')
}

window.findFriend = function () {
  socket.emit('join room')
}
