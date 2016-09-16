import { ADD_PIECE, RESET_BOARD } from '../constants/actionTypes.js'
import gameReducer from './gameReducer.js'

const initialState = {
  scale: 1,
  gameState: gameReducer(undefined, {})
}

const appReducer = (state = initialState, action) => {
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
