import React from 'react'
import ResetButton from './resetButton'
import GameBoard from './gameBoard'
import CurrentPlayer from './currentPlayer'

const Game = function ( props ) {
  var state = props.store.getState()

  var gameStyle = {
    width: '45vw',
    height: '95vw',
    background: '#777',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px',
    minWidth: '300px',
    maxHeight: '95vh',
    maxWidth: '95vh',
    alignItems: 'center'
  }

  var optionsStyle = {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#913',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '50px',
    minWidth: '300px',
    maxHeight: '14.25vh',
    width: '100%',
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
