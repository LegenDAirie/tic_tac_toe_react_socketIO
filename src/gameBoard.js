import React from 'react'
import Grid from './grid'
import Pieces from './pieces'

const GameBoard = props => {
  var state = props.store.getState()
  return (
    <div>
      <Grid scale={ state.scale }/>
      <Pieces store={ props.store }/>
    </div>
  )
}

GameBoard.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default GameBoard
