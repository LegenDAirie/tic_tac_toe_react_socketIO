import React from 'react'
import ResetButton from './resetButton'
import GameBoard from './gameBoard'
import CurrentPlayer from './currentPlayer'

const Game = function ( props ) {
  var state = props.store.getState()
  var style = { position: 'relative' }
  return (
    <div id="board-container" style={ style }>
      <ResetButton store={ props.store } />
      <CurrentPlayer currentPlayer={ state.gameState.currentPlayer } />
      <GameBoard store={ props.store } />
    </div>
  )
}

Game.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Game
