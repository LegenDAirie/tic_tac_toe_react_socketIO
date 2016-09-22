import React from 'react'
import { resetBoard } from './stateManagement/actionTypes'
import { resetButtonStylePortrait } from './reactCSS/componentStyles'

const ResetButton = props => (
  <div>
    <button style={ resetButtonStylePortrait } onClick={ () => props.store.dispatch(resetBoard()) }>
      Reset Game
    </button>
  </div>
)

ResetButton.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default ResetButton
