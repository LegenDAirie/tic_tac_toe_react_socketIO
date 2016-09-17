import React from 'react'
import GameBoard from './gameBoard'
import Pieces from './pieces.js'
import ResetButton from './resetButton'


const Game = function ( props ) {
  var state = props.store.getState()
  var style = { position: 'relative' }
  return (
    <div id="board-container" style={ style }>
      <GameBoard scale={ state.scale }/>
      <Pieces store={ props.store }/>
      <ResetButton store={ props.store }/>
    </div>
  )
}

Game.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Game
