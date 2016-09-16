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

const gameReducer = (state = initialState, action) => {
  const { boardState, currentPlayer} = state

  switch (action.type) {
    case 'ADD_PIECE':
    return {
      currentPlayer: currentPlayer === 'X' ? 'O': 'X', // set active player
      boardState: boardReducer(boardState, action),
      gameOver: checkIfWon(boardState, action )
    }
    case 'RESET_BOARD':
      return Object.assign({}, initialState, {
        //switch starting player
      })
    default:
      return state
  }
}

export default gameReducer
