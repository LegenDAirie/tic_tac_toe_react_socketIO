// Action Types
export const ADD_PIECE = 'ADD_PIECE'
export const SET_SCALE = 'SET_SCALE'
export const RESET_BOARD = 'RESET_BOARD'
export const GAME_OVER = 'GAME_OVER'

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

export function setScale(scale) {
  return { type: SET_SCALE, scale }
}

export function resetBoard() {
  return { type: RESET_BOARD }
}

export function gameOver() {
  return { type: GAME_OVER }
}
