// import React from 'react'
// import ReactDOM from 'react-dom'
// import createStore from './stateManagement/createStore'
// import appReducer from './stateManagement/reducers/appReducer'
// import Game from './game'
import io from 'socket.io-client'

const socket = io()

console.log(socket.id)

socket.on('connected', function (data) {
  console.log(data)
})

socket.on('hello', function (data) {
  console.log(data)
})

window.gtfo = function () {
  socket.emit('gtfo')
}

window.sayHi = function () {
  socket.emit('hello', "friend!")
}

// var store = createStore(appReducer)
//
// var render = function render() {
//   ReactDOM.render(
//     <Game store={ store }/>,
//     document.getElementById('root')
//   )
// }
//
// store.subscribe(render)
// render()
