import boardReducer from './boardReducer.js'
import { ADD_PIECE, RESET_BOARD, PLAYERS } from '../actionTypes.js'
const { X, O } = PLAYERS

function checkIfWon(boardState, action) {
  const { position, piece } = action
  // do some calculation
  return false
}

const initialState = {
  currentPlayer: X,
  boardState: boardReducer(undefined, {}),
  gameOver: false
}

const gameReducer = (gameState = initialState, action) => {
  const { boardState, currentPlayer } = gameState

  switch (action.type) {
    case ADD_PIECE:
    return {
      currentPlayer: currentPlayer === X ? O: X, // set active player
      boardState: boardReducer(boardState, action),
      gameOver: checkIfWon(boardState, action)
    }
    case RESET_BOARD:
      return Object.assign({}, initialState, {
        //switch starting player
      })
    default:
      return gameState
  }
}

export default gameReducer
