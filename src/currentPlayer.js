import React from 'react'

const CurrentPlayer = props => {
  return (
    <div style={{}}>CurrentPlayer: {props.currentPlayer}</div>
  )
}

CurrentPlayer.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired
}

export default CurrentPlayer
