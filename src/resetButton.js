import React from 'react'
import { resetBoard } from './stateManagement/actionTypes'

var style = {
  backgroundColor: '#f55',
  color: 'white',
  border: 'none',
  fontSize: '2vmax',
  padding: '15px'
}

const ResetButton = props => (
  <div>
    <button style={ style } onClick={ () => props.store.dispatch(resetBoard()) }>
      Reset Game
    </button>
  </div>
)

ResetButton.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default ResetButton
