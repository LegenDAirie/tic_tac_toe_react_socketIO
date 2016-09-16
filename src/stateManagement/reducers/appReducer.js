import gameReducer from './gameReducer.js'

const initialState = {
  scale: 1,
  gameState: gameReducer(undefined, {})
}

const appReducer = (state = initialState, action) => {
  return {
    scale: 1,
    gameState: gameReducer(state.gameState, action)
  }
}

export default appReducer
