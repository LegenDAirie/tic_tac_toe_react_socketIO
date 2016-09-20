import React from 'react'
import Grid from './grid'
import Pieces from './pieces'

const GameBoard = props => {
  var state = props.store.getState()
  var style = {
    position: 'relative'
  }
  return (
    <div style={ style }>
      <Grid gameSize={ state.gameSize }/>
    </div>
  )
}

// <Pieces store={ props.store }/>
GameBoard.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default GameBoard
