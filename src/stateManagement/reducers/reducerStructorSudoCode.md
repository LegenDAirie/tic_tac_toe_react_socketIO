# Reducer composition sudo code
---
#### Example state structure
```javascript
var exampleAppState = {
  gameSize: 1,
  gameState: {
    gameOver: false,
    currentPlayer: 'X',
    boardState: ['', '', 'O', '', '', 'X', '', '', '']
  }
}
```
---
#### Reducers
```javascript
function appStateReducer(state = {}, action) {
  return {
    gameSize: calculategameSize(state.gameSize, action),
    gameState: gameStateReducer(state.gameState, action)
  }
}

function gameStateReducer(origionalGameState, action) {
  if ('the action is about placing a piece') {
    return {
      gameOver: isGameOver(gameState.boardState, action),
      currentPlayer: //switch to the other player
      boardState: boardStateReducer(gameState.boardState, action)
    }
  }

  if ('the action is about resetting the board') {
    return {
      gameOver: false,
      currentPlayer: //switch to player who went second last game
      boardState: boardStateReducer(undefined, action)
    }
  }

  return origionalGameState
}

function boardStateReducer(boardState, action) {
  if ('the action is about placing a piece') {
    return newBoardWithPiecePlaced
  }

  if ('the action is about resetting the board') {
    return emptyBoard
  }
}
```
---
#### Helper functions
```javascript
function calculategameSize( origionalgameSize, action ) {
  if ('the action is about changing the gameSize then') {
    return newgameSize
  }
  return origionalgameSize
}

function isGameOver(boardState, action) {
  //calculate if the game has been won
  return gameOverStatus
}
```
