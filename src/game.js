import React from 'react'
import GameBoard from './grid'
import Pieces from './pieces'
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
