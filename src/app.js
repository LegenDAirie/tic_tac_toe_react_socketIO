import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './stateManagement/createStore'
import appReducer from './stateManagement/reducers/appReducer'
import Game from './game'
import { setgameSize } from './stateManagement/actionTypes'

var store = createStore(appReducer)

var render = function render() {
  ReactDOM.render(
    <Game store={ store }/>,
    document.getElementById('root')
  )
}

var setGameSize = () => store.dispatch(setgameSize(window.innerHeight * 0.8))

store.subscribe(render)
setGameSize()

window.addEventListener('resize', setGameSize)
