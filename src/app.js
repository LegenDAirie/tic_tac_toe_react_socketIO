import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './stateManagement/createStore'
import boardReducer from './stateManagement/boardReducer'
import Game from './game.js'

var store = createStore(boardReducer)

var render = function render() {
  ReactDOM.render(
    <Game store={store}/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
