import React from 'react'
import Grid from './grid'
import getPieces from './piecePositionLogic'
import { gameBoardStylePortrait } from './reactCSS/componentStyles'

const GameBoard = props => {
  var state = props.store.getState()

  return (
    <div style={ gameBoardStylePortrait }>
      <Grid gameSize={ state.gameSize }/>
      { getPieces(props.store) }
    </div>
  )
}

GameBoard.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default GameBoard
