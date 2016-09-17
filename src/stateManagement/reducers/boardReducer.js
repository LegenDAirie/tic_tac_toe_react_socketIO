import { ADD_PIECE, RESET_BOARD } from '../constants/actionTypes.js'

const initialState = ['', '', '', '', '', '', '', '', '']

const boardReducer = (boardState = initialState, action) => {
  const { position, piece, type } = action

  switch (type) {
    case ADD_PIECE:
      if ( boardState[position] !== '' ) {
        return boardState
      }
      var beginning = boardState.slice(0, position)
      var ending = boardState.slice(position+1, boardState.length)
      return [...beginning, piece, ...ending]
    case RESET_BOARD:
      return ['', '', '', '', '', '', '', '', '']
    default:
      return boardState
  }
}

module.exports = boardReducer
