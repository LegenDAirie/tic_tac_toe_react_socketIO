import React from 'react'

var EmptyCell = function(props) {
  var { style, handleCellSelect } = props

  return (
    <div style={ style } onClick={ handleCellSelect }>
    </div>
  )
}

EmptyCell.propTypes = {
  style: React.PropTypes.object.isRequired,
  handleCellSelect: React.PropTypes.func.isRequired
}

export default EmptyCell
