import React from 'react'
import { resetBoard } from './stateManagement/actionTypes'

var style = {
  backgroundColor: '#f55',
  color: 'white',
  border: 'none',
  textDecoration: 'none',
  fontSize: '25px',
  padding: '14px',
  margin: '10px'
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
