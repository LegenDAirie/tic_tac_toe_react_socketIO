import React from 'react'
import PieceX from './pieceX'
import PieceO from './pieceO'
import EmptyCell from './emptyCell'
import { addPiece } from './stateManagement/actionTypes'
import { pieceStylePortrait } from './reactCSS/componentStyles'

var getPieces = function(store) {
  var state = store.getState()
  var boardCells = state.gameState.boardState
  var currentCells = []

  for (var rowNum = 0; rowNum < 3; rowNum++) {
    for (var colNum = 0; colNum < 3; colNum++) {
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

      currentCells.push(
        <Piece key={ identifier } style={ pieceStylePortrait }
          handleCellSelect={ handleCellSelect }
        />
      )
    }
  }

  return currentCells
}

export default getPieces
