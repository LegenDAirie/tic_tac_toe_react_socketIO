import React from 'react';
import Board from './board';
import merge from 'lodash/merge';

// create button
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
        '22': ''
      }
    };
  },

  update: function(event) {

    var obj1 = {};

    if (this.state.boardState[event.target.id] == '') {
      obj1[event.target.id] = 'x';
    } else if (this.state.boardState[event.target.id] == 'x') {
      obj1[event.target.id] = 'o';
    } else if (this.state.boardState[event.target.id] == 'o') {
      obj1[event.target.id] = '';
    }

    var newBoard = merge({}, this.state.boardState, obj1);

    this.setState({
      boardState: newBoard
    });

  },

  render: function() {
    var style = { textAlign: 'center' };

    return (
      <div>
        <h1 style={style}>Tic Tac Toe</h1>
        <Board position={this.state.boardState} clickHandler={this.update}/>
      </div>
    );
  }

});
