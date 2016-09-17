import React from 'react'

var GameBoard = function(props) {
  var height = 300 * props.scale
  var style = {
    height: height + 'px',
    position:'absolute'
  }
  return (
    <div>
      <svg className="game-board" style={style} viewBox="0 0 300 300">
        <title>
          TicTacToe Board
        </title>
        <g fill="none" fillRule="evenodd">
          <path fill="#BABABA" d="M101 300h-2V0h2m100 300h-2V0h2"/>
          <path fill="#B9B9B9" d="M0 99h300v2H0zm0 100h300v2H0z"/>
        </g>
      </svg>
    </div>
  )
}

GameBoard.propTypes = {
  scale: React.PropTypes.number.isRequired
}

export default GameBoard
