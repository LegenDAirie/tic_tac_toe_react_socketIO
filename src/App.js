import React from 'react';
import { merge, each } from 'lodash';
import GameBoard from './game_board';
import BoardCell from './board_cell';
import createStore from './my_redux/createStore';
import reducer from './my_redux/reducer';
import PieceO from './piece_o';
import PieceX from './piece_x';


var initialScale = 2;
var initialBoardWidth = 300;
var rows = ['top', 'middle', 'bottom'];
var columns = ['Left', 'Center', 'Right'];
var boardCells = {};
var cellWidth = initialBoardWidth / 3;
var boardCellPositions = [
  'topLeft',
  'topCenter',
  'topRight',
  'middleLeft',
  'middleCenter',
  'middleRight',
  'bottomLeft',
  'bottomCenter',
  'bottomRight'
];

each(rows, (row, rowIndex) => {
  each(columns, (column, columnIndex) => {
    var positionName = row + column;

    boardCells[positionName] = (
      <BoardCell id={positionName} key={positionName}
      width={initialScale * cellWidth - 1} left={initialScale * rowIndex * cellWidth}
      top={ initialScale * columnIndex * cellWidth}/>
    );
  });
});

var initialState = {

  appState: {
    scale: 1
  },

  gameState: {
    boardWidth: 300,
    cellWidth: 100,
    boardCellPositions,
    boardCells
  }
};

var store = createStore(initialState, reducer);




export default function App() {
  var style = {
    position: 'relative'
  };

  return (
    <div id="board-container" style={style}>
      <GameBoard scale={1} />
    </div>
  );
}
