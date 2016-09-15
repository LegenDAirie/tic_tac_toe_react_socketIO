import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './my_redux/createStore'
import boardReducer from './my_redux/board_reducer'
import App from './App'

var store = createStore( boardReducer )

var render = function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()

var state = {
  scale: 1,
  gameState: {
    gameOver: false,
    currentPlayer: 'X',
    boardState: ['', '', '', '', '', '', '', '', '']
  }
}
