import React from 'react'
import Grid from './grid'
import getPieces from './piecePositionLogic'

const GameBoard = props => {
  var state = props.store.getState()
  var style = {
    background: '#9b8',
    height: '85%',
    width: '45vw',
    display: 'flex',
    minWidth: '300px',
    minHeight: '300px',
    maxWidth: '80.75vh',
    maxHeight: '80.75vh',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  }

  return (
    <div style={ style }>
      <Grid gameSize={ state.gameSize }/>
      { getPieces(props.store) }
    </div>
  )
}

GameBoard.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default GameBoard
