import React from 'react'
import PieceX from './pieceX'
import PieceO from './pieceO'
import EmptyCell from './emptyCell'
import { addPiece } from './stateManagement/actionTypes'


var getPieces = function(store) {
  var state = store.getState()
  var boardCells = state.gameState.boardState
  var currentCells = []
  var gameSize = state.gameSize
  var cellSize = gameSize / 3

  for (var rowNum = 0; rowNum < 3; rowNum++) {
    for (var colNum = 0; colNum < 3; colNum++) {
      var width = cellSize
      var left = cellSize * colNum
      var top = cellSize * rowNum
      let position = (rowNum*3) + colNum
      var identifier = '' + rowNum + colNum
      var handleCellSelect = function() {
        store.dispatch(addPiece(position, state.gameState.currentPlayer))
      }
      if (state.gameState.gameOver) {
        handleCellSelect = () => {}
      }
      var Piece = EmptyCell

      if ( boardCells[rowNum * 3 + colNum] === 'X' ) {
        Piece = PieceX
      }

      if ( boardCells[rowNum * 3 + colNum] === 'O' ) {
        Piece = PieceO
      }

      var style = {
        width: width + 'px',
        height: width + 'px',
        left: left + 'px',
        top: top + 'px',
        position: 'absolute',
        backgroundColor: 'rgba(50, 50, 50, .25)'
      }

      currentCells.push(
        <Piece key={ identifier } style={ style }
          handleCellSelect={ handleCellSelect }
        />
      )
    }
  }

  return currentCells
}

export default getPieces
