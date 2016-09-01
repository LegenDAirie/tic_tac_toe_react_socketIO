import React from 'react';

var BoardCell = function(props) {
  var { width, left, top, handleCellSelect, id } = props;

  var style = {
    width: width + 'px',
    height: width + 'px',
    left: left + 'px',
    top: top + 'px',
    backgroundColor: '#FAFAFA',
    position:'absolute'
  };


  return (
    <div id={id} style={style} onClick={handleCellSelect}>
    </div>
  )
}

export default BoardCell;
