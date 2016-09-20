import React from 'react'
import { resetBoard } from './stateManagement/actionTypes'

const ResetButton = props => (
  <div>
    <button
      onClick={() => props.store.dispatch(resetBoard())}
    >
      ResetGame
    </button>
  </div>
)

ResetButton.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default ResetButton
