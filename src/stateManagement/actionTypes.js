// Action Types
export const ADD_PIECE = 'ADD_PIECE'
export const SET_gameSize = 'SET_gameSize'
export const RESET_BOARD = 'RESET_BOARD'

// Players
export const PLAYERS = {
  X: 'X',
  O: 'O'
}

// Action Creators
export function addPiece(position, currentPlayer) {
  return {
    type: ADD_PIECE,
    piece: currentPlayer,
    position
  }
}

export function setgameSize(gameSize) {
  return { type: SET_gameSize, gameSize }
}

export function resetBoard() {
  return { type: RESET_BOARD }
}
