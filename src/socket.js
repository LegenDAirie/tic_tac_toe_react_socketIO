import setPlayerPiece from './stateManagement/actionTypes'
import addPiece from './stateManagement/actionTypes'
import resetBoard from './stateManagement/actionTypes'
import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
import io from 'socket.io-client'

export const store = createStore(appReducer)

export const socket = io()

socket.on('connected', function (data) {
  // waiting for other player to connect screen
})

socket.on('start game', function (piece) {
  // store.dispatch(setPlayerPiece(piece))
})

socket.on('add piece', function (data) {
  var { position, currentPlayer } = data
  store.dispatch(addPiece(position, currentPlayer))
})

socket.on('reset board', function () {
  store.dispatch(resetBoard())
})

window.findFriend = function () {
  socket.emit('join room')
}
