import React from 'react'

const CurrentPlayer = props => {
  var style = {
    backgroundColor: '#9b1',
    fontSize: '2vmax',
    color: '#333'
  }

  return (
    <div style={ style }>CurrentPlayer: { props.currentPlayer }</div>
  )
}

CurrentPlayer.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired
}

export default CurrentPlayer
