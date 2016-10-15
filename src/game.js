import React from 'react'
import ResetButton from './resetButton'
import GameBoard from './gameBoard'
import CurrentPlayer from './currentPlayer'
import { gameStyle, optionsStyle } from './reactCSS/componentStyles'
import { socket } from './socket'

const Game = function ( props ) {
  var state = props.state
  console.log('currentPlayer: ', state.gameState.currentPlayer)
  console.log('your piece: ', socket.piece)
  var whichTurn = state.gameState.currentPlayer === socket.piece ? 'yours': 'there\'s'

  return (
    <div>
      <div id="board-container" style={ gameStyle }>
        <div style={ optionsStyle }>
          <ResetButton/>
          <CurrentPlayer currentPlayer={ whichTurn } />
        </div>
        <GameBoard state={ state } />
      </div>
    </div>
  )
}

Game.propTypes = {
  state: React.PropTypes.object.isRequired
}

export default Game
