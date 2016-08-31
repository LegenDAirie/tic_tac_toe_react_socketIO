import React from 'react';

var BoardCell = function(props) {
  var { width, left, top } = props;

  var style = {
    width: width + 'px',
    height: width + 'px',
    left: left + 'px',
    top: top + 'px',
    backgroundColor: '#FAFAFA',
    position:'absolute'
  };


  return (
    <div style={style}>
    </div>
  )
}

export default BoardCell;
