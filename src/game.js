import React from 'react'
import ResetButton from './resetButton'
import GameBoard from './gameBoard'
import CurrentPlayer from './currentPlayer'

const Game = function ( props ) {
  var state = props.store.getState()
  // var style = { position: 'relative' }
  var gameStyle = {
    width: '45vw',
    height: '95vh',
    background: '#777',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px',
    minWidth: '300px',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  var optionsStyle = {
    display: 'flex',
    backgroundColor: '#913',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '50px',
  }

  return (
    <div>
      <div id="board-container" style={ gameStyle }>
        <div style={ optionsStyle }>
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
