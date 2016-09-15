import boardReducer from '../src/stateManagement/reducers/boardReducer.js'
import checkIfWonReducer from '../src/stateManagement/reducers/checkIfWonReducer.js'

const gameReducer = (state = {}, action) => {
  const { boardState, currentPlayer} = state

  switch (action.type) {
    case 'ADD_PIECE':
    return {
      currentPlayer: currentPlayer === 'X' ? 'O': 'X', // set active player
      boardState: boardReducer(boardState, action),
      gameOver: checkIfWonReducer(boardState, action )
    }
    case 'RESET_BOARD':
    return {
      boardState: boardReducer(undefined, action)
    }
    default:
      return state
  }
}

export default gameReducer
