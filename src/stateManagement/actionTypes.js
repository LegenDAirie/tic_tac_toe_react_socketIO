// Action Types
export const ADD_PIECE = 'ADD_PIECE'
export const RESET_BOARD = 'RESET_BOARD'
export const SETPLAYERPIECE = 'SETPLAYERPIECE'

// Players
export const PLAYERS = {
  X: 'X',
  O: 'O'
}

// Action Creators
export function addPiece (position, currentPlayer) {
  return {
    type: ADD_PIECE,
    piece: currentPlayer,
    position
  }
}

export function resetBoard () {
  return { type: RESET_BOARD }
}

export function setPlayerPiece (piece) {
  return { type: SETPLAYERPIECE, piece }
}
