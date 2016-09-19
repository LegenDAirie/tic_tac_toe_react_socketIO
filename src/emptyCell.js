import React from 'react'

var EmptyCell = function(props) {
  var { width, left, top, handleCellSelect } = props

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

EmptyCell.propTypes = {
  width: React.PropTypes.number.isRequired,
  left: React.PropTypes.number.isRequired,
  top: React.PropTypes.number.isRequired,
  handleCellSelect: React.PropTypes.func.isRequired
}

export default EmptyCell
