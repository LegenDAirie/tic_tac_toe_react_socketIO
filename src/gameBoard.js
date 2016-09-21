import React from 'react'
import Grid from './grid'
import getPieces from './piecePositionLogic'

const GameBoard = props => {
  var state = props.store.getState()
  // var style = {
  //   position: 'relative'
  // }
  var style = {
    background: '#9b8',
    height: '85%',
    width: '45vw',
    display: 'flex',
    minWidth: '300px'



  }
  return (
    <div style={ style }>
      <Grid gameSize={ state.gameSize }/>
    </div>
  )
}
// { getPieces(props.store) }

GameBoard.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default GameBoard
