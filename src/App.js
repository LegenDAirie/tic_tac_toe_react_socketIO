import React from 'react';
import GameBoard from './game_board'
import PieceO from './piece_o'
import PieceX from './piece_x'
export default React.createClass({



  render: function() {


    var scale = window.innerHeight / 374;

    var style = {
      // textAlign: 'center',
      position: 'relative'
    };

    return (
      <div id="board-container" style={style}>
        <GameBoard scale={scale}/>
        <PieceO scale={scale}/>
        <PieceX scale={scale}/>
      </div>
    );
  }
});
