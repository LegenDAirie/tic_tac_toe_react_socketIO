import React from 'react'
import { playerStyle } from './reactCSS/componentStyles'

const CurrentPlayer = props => (
  <div style={ playerStyle }> { props.currentPlayer } </div>
)

CurrentPlayer.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired
}

export default CurrentPlayer
