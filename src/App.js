import React from 'react';
import { merge, each, times } from 'lodash';
import GameBoard from './game_board';
import PieceX from './piece_x';
import PieceO from './piece_o';
import BoardCell from './board_cell';
// import Game from './game'

// import createStore from './my_redux/createStore';
// import reducer from './my_redux/reducer';


// var initialScale = 2;
// var initialBoardWidth = 300;
// var rows = ['top', 'middle', 'bottom'];
// var columns = ['Left', 'Center', 'Right'];
// var boardCells = {};
// var cellWidth = initialBoardWidth / 3;
// var boardCellPositions = [
//   'topLeft',
//   'topCenter',
//   'topRight',
//   'middleLeft',
//   'middleCenter',
//   'middleRight',
//   'bottomLeft',
//   'bottomCenter',
//   'bottomRight'
// ];


// each(rows, (row, rowIndex) => {
//   each(columns, (column, columnIndex) => {
//     var positionName = row + column;
//
//     boardCells[positionName] = (
//       <BoardCell id={positionName} key={positionName}
//       width={initialScale * cellWidth - 1} left={initialScale * rowIndex * cellWidth}
//       top={ initialScale * columnIndex * cellWidth}/>
//     );
//   });
// });

// var initialState = {
//
//   appState: {
//     scale: 1
//   },
//
//   gameState: {
//     boardWidth: 300,
//     cellWidth: 100,
//     boardCellPositions,
//     boardCells
//   }
// };

// var store = createStore(initialState, reducer);

var placePieces = function(boardCells) {
  var boardCells = ['O', '', 'X', 'O', 'O', 'O', '', 'X', ''];
  var currentCells = [];
  var scale = 1;
  var cellWidth = 100;
  var cellHeight = cellWidth;

  for (var rowNum = 0; rowNum < 3; rowNum++) {
    for (var colNum = 0; colNum < 3; colNum++) {
      var width = scale * cellWidth - 1;
      var left = scale * colNum * cellWidth;
      var top = scale * rowNum * cellHeight;
      var position = '' + rowNum + colNum;

      var Piece = BoardCell

      if ( boardCells[rowNum*3 + colNum] == 'X' ) {
        Piece = PieceX
      }
      
      if ( boardCells[rowNum*3 + colNum] == 'O' ) {
        Piece = PieceO
      }
      // } else if (boardCells[rowNum*3 + colNum] === '' ) {
      //   Piece = BoardCell
      // }

      currentCells.push(
        <Piece id={position} key={position}
        width={width} left={left} top={top}/>
      );
    }
  }

  return currentCells;
};



export default function App(props) {

  var { store } = props;

  var pieces = placePieces(store.getState());
  console.log(pieces);

  var style = {
    position: 'relative'
  };

  return (
    <div id="board-container" style={style}>
      <GameBoard/>
      {pieces}
    </div>
  );
}
