import { ADD_PIECE, RESET_BOARD } from '../constants/actionTypes.js'

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PIECE:
      return state

    case RESET_BOARD:
      return state

    default:
      return state
  }
}

export default appReducer
