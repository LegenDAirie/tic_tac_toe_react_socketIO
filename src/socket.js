import { addPiece, resetBoard } from './stateManagement/actionTypes'
import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
import io from 'socket.io-client'

export const store = createStore(appReducer)

export const socket = io()
socket.piece = ''

socket.on('connected', function (data) {
  // waiting for other player to connect screen
})

socket.on('start game', function (piece) {
  console.log('game start!')
  console.log('I am piece: ', piece)
  socket.piece = piece
})

socket.on('add piece', function (data) {
  var { position, player } = data
  console.log('recieved {add piece: ' + player + '} message')
  store.dispatch(addPiece(position, player))
})

socket.on('reset board', function () {
  console.log('resetting the board!')
  store.dispatch(resetBoard())
})

window.findFriend = function () {
  socket.emit('join room')
}
