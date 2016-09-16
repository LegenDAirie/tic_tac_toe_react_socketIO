import { ADD_PIECE, RESET_BOARD } from '../constants/actionTypes.js'

const initialState = ['', '', '', '', '', '', '', '', '']

const boardReducer = (state = initialState, action) => {
  const { position, piece, type } = action

  switch (type) {
    case ADD_PIECE:
      if ( state[position] !== '' ) {

        return state
      }
      var beginningArray = state.slice(0, position)
      var endingArray = state.slice(position+1, state.length)
      return beginningArray.concat([piece]).concat(endingArray)

    case RESET_BOARD:
      return ['', '', '', '', '', '', '', '', '']

    default:
      return state
  }
}

module.exports = boardReducer
