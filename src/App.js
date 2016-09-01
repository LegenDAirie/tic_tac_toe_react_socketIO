import React from 'react';
import merge from 'lodash/merge';
import GameBoard from './game_board';
import PieceO from './piece_o';
import PieceX from './piece_x';


export default React.createClass({

  getInitialState: function() {
    return {
      boardState: {
        '00': '',
        '01': '',
        '02': '',
        '10': '',
        '11': '',
        '12': '',
        '20': '',
        '21': '',
        '22': '',
      }
    };
  },

  handleCellSelect: function(event) {
    console.log(event.target.id)

  },

  render: function() {

    var scale = window.innerHeight / 374;

    var style = {
      // textAlign: 'center',
      position: 'relative'
    };

    return (
      <div id="board-container" style={style}>
        <GameBoard scale={scale} handleCellSelect={this.handleCellSelect}/>
        <PieceO scale={scale}/>
        <PieceX scale={scale}/>
      </div>
    );
  }
});
