import React from 'react'
import GameBoard from './gameBoard'

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
