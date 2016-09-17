import React from 'react'
import GameBoard from './gameBoard'
import Pieces from './pieces.js'

const Game = function ( props ) {
  var style = { position: 'relative' }
  return (
    <div id="board-container" style={ style }>
      <GameBoard store={ props.store }/>
      <Pieces store={ props.store }/>
    </div>
  )
}

Game.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Game
