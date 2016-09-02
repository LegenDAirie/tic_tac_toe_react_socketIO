import React from 'react';
import { merge, each } from 'lodash';
import GameBoard from './game_board';
import BoardCell from './board_cell';
import PieceO from './piece_o';
import PieceX from './piece_x';




export default React.createClass({

  handleCellSelect: function(event) {
    console.log('yeah!');
  },

  getInitialState: function() {
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
          handleCellSelect={this.handleCellSelect}
          width={initialScale * cellWidth - 1} left={initialScale * rowIndex * cellWidth}
          top={ initialScale * columnIndex * cellWidth}/>
        );
      });
    });


    return {
      scale: initialScale,
      boardWidth: initialBoardWidth,
      boardCells: boardCells,
      boardCellPositions: boardCellPositions
    };
  },



  setScaleFactor: function() {
    var svgGameBoardHeight = 300;
    var GameBoardFullScreenScaleFactor = window.innerHeight / svgGameBoardHeight;
    var scale = GameBoardFullScreenScaleFactor * 0.8;

    this.setState({scale: scale});
  },

  handleCellSelect: function(event) {
    // console.log(event.target.id)

  },

  render: function() {
    var { scale } = this.state;

    var style = {
      // textAlign: 'center',
      position: 'relative'
    };


    return (
      <div id="board-container" style={style}>
        <GameBoard scale={scale} handleCellSelect={this.handleCellSelect}/>

        {_.map(this.state.boardCellPositions, cell => this.state.boardCells[cell])}
      </div>
    );
  }
});

// <PieceO scale={scale}/>
// <PieceX scale={scale}/>
