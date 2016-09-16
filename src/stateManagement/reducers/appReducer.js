import { SET_SCALE } from '../constants/actionTypes.js'
import gameReducer from './gameReducer.js'

const calculateScale = ({ currentScale, action }) => {
  if (action.type !==  SET_SCALE) {
    return currentScale
  }
  return 1
}

const initialState = {
  scale: 1,
  gameState: gameReducer(undefined, {})
}

const appReducer = (state = initialState, action) => {
  return {
    scale: calculateScale({ currentScale: state.scale, action }),
    gameState: gameReducer(state.gameState, action)
  }
}

export default appReducer
