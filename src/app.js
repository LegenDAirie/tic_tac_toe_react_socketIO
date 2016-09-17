import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
import Game from './game.js'

var store = createStore(appReducer)

var render = function render() {
  ReactDOM.render(
    <Game store={ store }/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
