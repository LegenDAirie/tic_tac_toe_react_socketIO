import React from 'react'
// import { merge, each, times } from 'lodash'
import GameBoard from './game_board'
import PieceX from './piece_x'
import PieceO from './piece_o'
import BoardCell from './board_cell'

var placePieces = function(store) {
  var boardCells = store.getState()
  var currentCells = []
  var scale = 1
  var cellWidth = 100
  var cellHeight = cellWidth

  for (var rowNum = 0 rowNum < 3 rowNum++) {
    for (var colNum = 0 colNum < 3 colNum++) {
      var width = scale * cellWidth - 1
      var left = scale * colNum * cellWidth
      var top = scale * rowNum * cellHeight
      let position = (rowNum*3) + colNum
      var identifier = '' + rowNum + colNum

      var Piece = BoardCell

      if ( boardCells[rowNum*3 + colNum] === 'X' ) {
        Piece = PieceX
      }

      if ( boardCells[rowNum*3 + colNum] === 'O' ) {
        Piece = PieceO
      }

      currentCells.push(
        <Piece id={identifier} key={identifier} store={store}
          width={width} left={left} top={top}
          handleCellSelect={function(event) {
            store.dispatch({
              type: 'ADD_PIECE',
              position: position,
              piece: 'X'
            })
          }}
        />
      )
    }
  }

  return currentCells
}



export default function App(props) {

  var { store } = props

  var pieces = placePieces(store)
  console.log(pieces)

  var style = {
    position: 'relative'
  }

  return (
    <div id="board-container" style={style}>
      <GameBoard/>
      {pieces}
    </div>
  )
}
