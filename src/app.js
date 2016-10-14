import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
import Game from './game'
import setPlayerPiece from './stateManagement/actionTypes'
import io from 'socket.io-client'
const socket = io()

socket.on('connected', function (data) {
  // waiting for other player to connect screen
})

socket.on('start game', function (piece) {
  store.dispatch(setPlayerPiece(piece))
})

window.gtfo = function () {
  socket.emit('leave room')
}

window.getStatusPlz = function () {
  socket.emit('status')
}

window.findFriend = function () {
  socket.emit('join room')
}

var store = createStore(appReducer)

var render = function render() {
  ReactDOM.render(
    <Game store={ store }/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
