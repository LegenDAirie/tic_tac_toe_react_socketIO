import React from 'react';

var PieceO = function(props) {

  var { scale } = props;

  var width = 100 * scale + 'px';
  var height = 100 * scale + 'px';
  var positionType = 'absolute'

  var style = {
    width: width,
    height: height,
    position: positionType
  };

  return (
    <svg style={style} viewBox="0 0 100 100">
      <title>
        Circle
      </title>
      <circle id="a" cx="50" cy="50" r="30" stroke="#FF9D9D" strokeWidth="6" fill="#FFF" fillRule="evenodd" fillOpacity="0"/>
    </svg>
  )

}

export default PieceO;
