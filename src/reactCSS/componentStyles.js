// into game.js
export const gameStyle = {
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

export const optionsStyle = {
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

// into gameBoard.js
export const gameBoardStyle = {
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

// into currentPlayer.js
export const playerStyle = {
  backgroundColor: '#9b1',
  color: 'white',
  maxHeight: '14.25vh',
  fontSize: '5vmin',
}

// into resetButton.js
export const resetButtonStyle = {
  backgroundColor: '#f55',
  color: 'white',
  border: 'none',
  minHeight: '50px',
  maxHeight: '14.25vh',
  fontSize: '5vmin',
  borderRadius: '5px',
  padding: '0 15px'
}
