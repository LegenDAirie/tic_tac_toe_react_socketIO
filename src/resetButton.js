import React from 'react'
import { resetBoard } from './stateManagement/actionTypes'

const ResetButton = props => (
  <div>
    <button
      style={{float: 'right'}}
      onClick={() => props.store.dispatch(resetBoard())}
    >
      ResetGame
    </button>
  </div>
)

export default ResetButton
