import React from 'react'

var BoardCell = function(props) {
  var { width, left, top, handleCellSelect, id } = props

  var style = {
    height: width + 'px',
    width: width + 'px',
    left: left + 'px',
    top: top + 'px',
    backgroundColor: '#555',
    position:'absolute'
  }


  return (
    <div style={style} onClick={handleCellSelect}>
    </div>
  )
}

export default BoardCell
