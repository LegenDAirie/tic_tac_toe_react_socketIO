var exampleAppState = {
  scale: 1,
  gameState: {
    gameOver: false,
    currentPlayer: 'X',
    boardState: ['', '', '', '', '', '', '', '', '']
  }
}

function calculateScale( origionalScale, action ) {
  //calculate the scale based off of screen size and ratio
  if ('the action is about changing the scale') {
    return newScale
  }

  return origionalScale
}

function appStateReducer(state = {}, action) {
  return {
    scale: calculateScale(state.scale, action),
    gameState: gameStateReducer(state.gameState, action)
  }
}

function gameStateReducer(origionalGameState, action) {

  if ('the action is about placing a piece') {
    return {
      gameOver: isGameOver(gameState.boardState, action),
      currentPlayer: //switch to the other player logic
      boardState: boardStateReducer(gameState.boardState, action)
    }
  }

  if ('the action is about resetting the board') {
    return {
      gameOver: false,
      currentPlayer: //switch to player who went seccond last game
      boardState: boardStateReducer(undefined, action)
    }
  }

  return origionalGameState
}

function isGameOver(boardState, action) {
  //calculate if the game has been won
  return gameOverStatus
}

function boardStateReducer(boardState, action) {
  if ('the action is about placing a piece') {

    return newBoardWithPiecePlaced
  }

  if ('the action is about resetting the board') {
    return emptyBoard
  }
}
