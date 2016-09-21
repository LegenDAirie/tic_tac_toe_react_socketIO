import React from 'react'
import ResetButton from './resetButton'
import GameBoard from './gameBoard'
import CurrentPlayer from './currentPlayer'

const Game = function ( props ) {
  var state = props.store.getState()
  // var style = { position: 'relative' }
  var style = {
    // display: 'flex',
    // flexDirection: 'column',
    // backgroundColor: '#259',
    // width: '40vw',
    // height: '90vh'
  }

  var style2 = {
    // display: 'flex',
    // backgroundColor: '#913',
    // justifyContent: 'space-around'
  }

  return (
    <div id="board-container" style={ style }>
      <div style={ style2 }>
        <ResetButton store={ props.store } />
        <CurrentPlayer currentPlayer={ state.gameState.currentPlayer } />
      </div>
      <GameBoard store={ props.store } />
    </div>
  )
}

Game.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Game
