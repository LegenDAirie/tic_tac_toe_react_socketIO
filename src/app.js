import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
import Game from './game.js'
import { setScale } from './stateManagement/actionTypes'

var store = createStore(appReducer)

var render = function render() {
  ReactDOM.render(
    <Game store={ store }/>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()

window.addEventListener('resize', function() {
  var heightNeeded = window.innerHeight * 0.8
  var newScale = heightNeeded / 300 //height on the game grid
  store.dispatch(setScale(newScale))
})
