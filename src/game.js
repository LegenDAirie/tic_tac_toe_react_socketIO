import React from 'react'
import ResetButton from './resetButton'
import GameBoard from './gameBoard'

const Game = function ( props ) {
  var state = props.store.getState()
  var style = { position: 'relative' }
  return (
    <div id="board-container" style={ style }>
      <ResetButton store={ props.store }/>
      <GameBoard store={ props.store }/>
    </div>
  )
}

Game.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Game
