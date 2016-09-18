import boardReducer from './boardReducer.js'
import { ADD_PIECE, RESET_BOARD, PLAYERS } from '../actionTypes.js'
const { X, O } = PLAYERS

function checkIfWon(boardState, action) {
  const newBoard = boardReducer(boardState, action)
  const winningConfigurations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ]
  const hasBeenWon = winningConfigurations.some(function(winningConfiguration) {
    var XHasWon = winningConfiguration.every(function(position) {
      var index = position - 1
      return newBoard[index] === X
    })
    var OHasWon = winningConfiguration.every(function(position) {
      var index = position - 1
      return newBoard[index] === O
    })

    return XHasWon || OHasWon
  })
  return hasBeenWon
}

function getNextPlayer(gameState, action) {
  if (gameState.boardState[action.position] !== '') {
    return gameState.currentPlayer
  }
  return gameState.currentPlayer === X ? O: X
}

const initialState = {
  currentPlayer: X,
  boardState: boardReducer(undefined, {}),
  gameOver: false
}

const gameReducer = (gameState = initialState, action) => {
  const { boardState, gameOver } = gameState

  switch (action.type) {
    case ADD_PIECE:
      if (gameOver) {return gameState}
    return {
      currentPlayer: getNextPlayer(gameState, action),
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
