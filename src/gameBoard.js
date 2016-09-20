import React from 'react'
import Grid from './grid'
import placePieces from './piecePositionLogic'

const GameBoard = props => {
  var state = props.store.getState()
  var style = {
    position: 'relative'
  }
  return (
    <div style={ style }>
      <Grid gameSize={ state.gameSize }/>
      { placePieces(props.store) }
    </div>
  )
}

GameBoard.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default GameBoard
