import React from 'react';
import BoardCell from './board_cell'

var makeBoardCell = function( gameBoardWidth, gameBoardHeight, handleCellSelect ) {
  var boardCells = []
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(''+i+j);
      boardCells.push(<BoardCell key={''+i+j} id={''+i+j} handleCellSelect={handleCellSelect} width={(gameBoardWidth / 3 )- 1} left={j * gameBoardWidth / 3} top={i*gameBoardHeight / 3}/>)
    }
  }
  return boardCells
}

// 0, GameBoard.width / 3, GameBoard.width * 2 / 3

// BoardCell.width = j * GameBoard.width / 3
// BoardCell.height = i * GameBoard.height / 3


var GameBoard = function(props) {
  var { scale, handleCellSelect } = props;

  var width = 300 * scale;
  var height = 300 * scale;

  var style = {
    width: width + 'px',
    height: height + 'px',
    position:'absolute'
  };

  return (
    <div>
      <svg className="game-board" style={style} viewBox="0 0 300 300">
        <title>
          TicTacToe Board
        </title>
        <g fill="none" fill-rule="evenodd">
          <path fill="#BABABA" d="M101 300h-2V0h2m100 300h-2V0h2"/>
          <path fill="#B9B9B9" d="M0 99h300v2H0zm0 100h300v2H0z"/>
        </g>
      </svg>
      {makeBoardCell(width, height, handleCellSelect)}
    </div>
  )
}

export default GameBoard;

/*
  create div that is clickable ( lets you add X, O, or nothing )
  start from 0,0, then 1/3, then 2/3 of the playspace

  <div width = ~100 * scale > </div>


*/
