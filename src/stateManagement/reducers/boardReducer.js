import {
  ADD_PIECE, SET_SCALE, RESET_BOARD, GAME_OVER,
  PLAYERS,
  addPiece, setScale, resetBoard, gameOver
} from '../constants/actionTypes.js'

const boardReducer = (state, action) => {
  state = state || ['', '', '', '', '', '', '', '', '']

  switch (action.type) {
    case 'ADD_PIECE':

      if ( state[action.position] !== '' ) {
        return state
      }

      var beginningArray = state.slice(0, action.position)
      var endingArray = state.slice(action.position+1, state.length)

      return beginningArray.concat([action.piece]).concat(endingArray)


    case 'RESET_BOARD':
    default:
      return state
  }
}

module.exports = boardReducer
