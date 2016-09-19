import React from 'react'

var PieceO = function (props) {
  var { width, left, top} = props

  var style = {
    height: width + 'px',
    width: width + 'px',
    left: left + 'px',
    top: top + 'px',
    position: 'absolute'
  }

  return (
    <svg style={style} viewBox='0 0 100 100'>
      <title>
        Circle
      </title>
      <circle id='a' cx='50' cy='50' r='30' stroke='#FF9D9D' strokeWidth='6' fill='#FFF' fillRule='evenodd' fillOpacity='0'/>
    </svg>
  )
}

PieceO.propTypes = {
  width: React.PropTypes.number.isRequired,
  left: React.PropTypes.number.isRequired,
  top: React.PropTypes.number.isRequired
}

export default PieceO
