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
  var currentCells = [];

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      currentCells.push(
        <PieceX id={'' + i + j} key={'' + i + j}
        width={1 * 100 - 1} left={1 * j * 100}
        top={ 1 * i * 100}/>
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

  // {pieces.map(function(component) {
  //   return component;
  // })}
  return (
    <div id="board-container" style={style}>
      <GameBoard/>
      {pieces}
    </div>
  );
}
