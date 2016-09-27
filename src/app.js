import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
import Game from './game'
import Peer from 'peerjs'

var peer = new Peer('someid', {host: 'localhost', port: 9000, path: '/'})

peer.on('connection', function () {
  console.log('a peer has connected')
})

var store = createStore(appReducer)

var render = function render() {
  ReactDOM.render(
    <Game store={ store }/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
