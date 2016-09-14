// Action Types
export const ADD_PIECE = 'ADD_PIECE'
export const SET_SCALE = 'SET_SCALE'
export const RESET_BOARD = 'RESET_BOARD'
export const SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER'
export const GAME_OVER = 'GAME_OVER'

// Action Creators
export function addPiece(position) {
  return { type: ADD_PIECE, position }
}

export function setScale(scale) {
  return { type: SET_SCALE, scale }
}

export function resetBoard() {
  return { type: RESET_BOARD }
}

export function setActivePlayer() {
  return { type: SET_ACTIVE_PLAYER }
}

export function gameOver() {
  return { type: GAME_OVER }
}
