import React from 'react'
import ResetButton from './resetButton'
import GameBoard from './gameBoard'
import CurrentPlayer from './currentPlayer'
import { gameStylePortrait, optionsStylePortrait } from './reactCSS/componentStyles'

const Game = function ( props ) {
  var state = props.store.getState()

  return (
    <div>
      <div id="board-container" style={ gameStylePortrait }>
        <div style={ optionsStylePortrait }>
          <ResetButton store={ props.store } />
          <CurrentPlayer currentPlayer={ state.gameState.currentPlayer } />
        </div>
        <GameBoard store={ props.store } />
      </div>
    </div>
  )
}

Game.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Game
