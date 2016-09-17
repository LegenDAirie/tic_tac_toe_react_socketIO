import { ADD_PIECE, RESET_BOARD, PLAYERS } from '../constants/actionTypes.js'
import boardReducer from './boardReducer.js'

function checkIfWon(boardState, action) {
  const { position, piece } = action
  // do some calculation
  return false
}

const initialState = {
  currentPlayer: 'X',
  boardState: boardReducer(undefined, {}),
  gameOver: false
}

const gameReducer = (gameState = initialState, action) => {
  const { boardState, currentPlayer } = gameState

  switch (action.type) {
    case ADD_PIECE:
    return {
      currentPlayer: currentPlayer === PLAYERS.X ? PLAYERS.O: PLAYERS.X, // set active player
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
