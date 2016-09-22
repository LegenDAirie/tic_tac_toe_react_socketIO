import React from 'react'
import { playerStylePortrait } from './reactCSS/componentStyles'

const CurrentPlayer = props => {

  return (
    <div style={ playerStylePortrait }>CurrentPlayer: { props.currentPlayer }</div>
  )
}

CurrentPlayer.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired
}

export default CurrentPlayer
