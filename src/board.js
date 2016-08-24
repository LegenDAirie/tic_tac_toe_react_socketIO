import React from 'react';

var Board = function( props ) {

  var buttonStyle = {
    backgroundColor: '#ff6768',
    height: '100px',
    listStyleType: 'none'
  };
  var spaceStyle = {
    height: '50px',
    listStyleType: 'none'
  };
  return (
    <div>
      <ul className="large-block-grid-4">

        <li id="00" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-2 columns">{props.position['00']}</li>
        <li id="01" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-1 columns">{props.position['01']}</li>
        <li id="02" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-1 columns end">{props.position['02']}</li>

        <li style={spaceStyle} className="large-2 large-offset-2 columns"></li>
        <li style={spaceStyle} className="large-2 large-offset-1 columns"></li>
        <li style={spaceStyle} className="large-2 large-offset-1 columns end"></li>

        <li id="10" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-2 columns">{props.position['10']}</li>
        <li id="11" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-1 columns">{props.position['11']}</li>
        <li id="12" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-1 columns end">{props.position['12']}</li>

        <li style={spaceStyle} className="large-2 large-offset-2 columns"></li>
        <li style={spaceStyle} className="large-2 large-offset-1 columns"></li>
        <li style={spaceStyle} className="large-2 large-offset-1 columns end"></li>

        <li id="20" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-2 columns">{props.position['20']}</li>
        <li id="21" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-1 columns">{props.position['21']}</li>
        <li id="22" style={buttonStyle} onClick={props.clickHandler} className="large-2 large-offset-1 columns end">{props.position['22']}</li>
      </ul>
    </div>
  );
};

export default Board;
