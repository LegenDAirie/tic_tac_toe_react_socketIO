import React from 'react'
import GameBoard from './gameBoard'
import Pieces from './pieces.js'

const App = function (props) {

  var { store } = props

  var style = {
    position: 'relative'
  }

  return (
    <div id="board-container" style={style}>
      <GameBoard/>

    </div>
  )
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
}
