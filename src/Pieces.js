import React from 'react'
import PieceX from './pieceX'
import PieceO from './pieceO'
import EmptyCell from './emptyCell'
import { addPiece } from './stateManagement/actionTypes'

var placePieces = function(store) {
  var state = store.getState()
  var boardCells = state.gameState.boardState
  var currentCells = []
  var scale = state.scale
  var cellWidth = 100
  var cellHeight = cellWidth

  for (var rowNum = 0; rowNum < 3; rowNum++) {
    for (var colNum = 0; colNum < 3; colNum++) {
      var width = scale * cellWidth - 1
      var left = scale * colNum * cellWidth
      var top = scale * rowNum * cellHeight
      let position = (rowNum*3) + colNum
      var identifier = '' + rowNum + colNum
      var handleCellSelect = function() {
        store.dispatch(addPiece(position, state.gameState.currentPlayer))
      }
      if (state.gameState.gameOver) {
        handleCellSelect = () => {}
      }
      var Piece = EmptyCell

      if ( boardCells[rowNum*3 + colNum] === 'X' ) {
        Piece = PieceX
      }

      if ( boardCells[rowNum*3 + colNum] === 'O' ) {
        Piece = PieceO
      }

      currentCells.push(
        <Piece key={identifier} store={store}
          width={width} left={left} top={top}
          handleCellSelect={handleCellSelect}
        />
      )
    }
  }

  return currentCells
}

const Pieces = props => {
  var pieces = placePieces(props.store)
  return (
    <div>
      {pieces}
    </div>
  )
}

Pieces.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Pieces
