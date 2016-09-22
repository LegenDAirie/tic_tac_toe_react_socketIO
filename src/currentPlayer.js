import React from 'react'

const CurrentPlayer = props => {
  var style = {
    backgroundColor: '#9b1',
    color: 'white',
    maxHeight: '14.25vh',
    fontSize: '5vmin',
  }

  return (
    <div style={ style }>CurrentPlayer: { props.currentPlayer }</div>
  )
}

CurrentPlayer.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired
}

export default CurrentPlayer
