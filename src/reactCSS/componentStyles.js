// into game.js

export const gameStyleLandscape = {
  width: '45vw',
  height: '95vw',
  background: '#777',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '350px',
  minWidth: '300px',
  maxHeight: '95vh',
  maxWidth: '95vh',
  alignItems: 'center'
}

export const gameStylePortrait = {
  width: '100vw',
  height: '100vh',
  background: '#777',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '350px',
  minWidth: '300px',
}

export const optionsStyleLandscape = {
  display: 'flex',
  flexGrow: 1,
  backgroundColor: '#913',
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: '50px',
  minWidth: '300px',
  maxHeight: '14.25vh',
  width: '100%',
}

export const optionsStylePortrait = {
  display: 'flex',
  // flexGrow: 1,
  backgroundColor: '#913',
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: '50px',
  minWidth: '300px',
  maxHeight: '15vh',
  maxWidth: '85vh',
  width: '100%',
  height: '15vh',
}

// into gameBoard.js
export const gameBoardStyleLandscape = {
  background: '#9b8',
  height: '85%',
  width: '45vw',
  display: 'flex',
  minWidth: '300px',
  minHeight: '300px',
  maxWidth: '80.75vh',
  maxHeight: '80.75vh',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
}

export const gameBoardStylePortrait = {
  background: '#9b8',
  height: '85vh',
  width: '100vw',
  display: 'flex',
  minWidth: '300px',
  minHeight: '300px',
  maxWidth: '85vh',
  maxHeight: '100vw',
  flexWrap: 'wrap',
}
// into currentPlayer.js
export const playerStyleLandscape = {
  backgroundColor: '#9b1',
  color: 'white',
  maxHeight: '14.25vh',
  fontSize: '5vmin',
}

export const playerStylePortrait = {
  backgroundColor: '#9b1',
  color: 'white',
  maxHeight: '14.25vh',
  fontSize: '6.25vmin',
}

// into resetButton.js
export const resetButtonStyleLandscape = {
  backgroundColor: '#f55',
  color: 'white',
  border: 'none',
  minHeight: '50px',
  maxHeight: '14.25vh',
  fontSize: '5vmin',
  borderRadius: '5px',
  padding: '0 15px'
}

export const resetButtonStylePortrait = {
  backgroundColor: '#f55',
  color: 'white',
  border: 'none',
  minHeight: '50px',
  maxHeight: '14.25vh',
  fontSize: '6.25vmin',
  borderRadius: '5px',
  padding: '0 15px'
}


// into piecePositionLogic.js
export const pieceStyleLandscape = {
  zIndex: '1',
  boxSizing: 'border-box',
  minWidth: '100px',
  minHeight: '100px',
  maxWidth: '26.9166667vh',
  maxHeight: '26.9166667vh',
  height: '15vw',
  flexBasis: '15vw',
  backgroundColor: 'rgba(50, 50, 50, .25)'
}

export const pieceStylePortrait = {
  zIndex: '1',
  boxSizing: 'border-box',
  height: '33.33333333333333333%',
  width: '33.33333333333333333%',
  backgroundColor: 'rgba(50, 50, 50, .25)',
  border: '1px solid black',
}

// into grid.js
export const gridStyleLandscape = {
  height: '45vw',
  width: '45vw',
  maxWidth: '80.75vh',
  maxHeight: '80.75vh',
  minWidth: '300px',
  minHeight: '300px',
  position: 'absolute',
}

export const gridStylePortrait = {
  width: '85vh',
  maxWidth: '100vw',
  maxHeight: '85vh',
  minWidth: '300px',
  minHeight: '300px',
  position: 'absolute',
}
