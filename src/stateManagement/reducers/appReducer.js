import { SET_SCALE } from '../constants/actionTypes.js'
import gameReducer from './gameReducer.js'

const getScale = ({ currentScale, action }) => {
  var { type, scale } = action
  if (type !== SET_SCALE) {
    return currentScale
  }
  return scale
}

const initialState = {
  scale: 1,
  gameState: gameReducer(undefined, {})
}

const appReducer = (state = initialState, action) => {
  return {
    scale: getScale({ currentScale: state.scale, action }),
    gameState: gameReducer(state.gameState, action)
  }
}

export default appReducer
