import React from 'react'
import { playerStyle } from './reactCSS/componentStyles'

const CurrentPlayer = props => {

  return (
    <div style={ playerStyle }> Turn: { props.currentPlayer } </div>
  )
}

CurrentPlayer.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired
}

export default CurrentPlayer
