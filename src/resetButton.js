import React from 'react'
import { resetButtonStyle } from './reactCSS/componentStyles'
import { socket } from './socket'

const ResetButton = () => (
  <div>
    <button style={ resetButtonStyle } onClick={ () => socket.emit('reset board') }>
      Reset Game
    </button>
  </div>
)

export default ResetButton
