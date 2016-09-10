var deepFreeze = require('deep-freeze');
var expect = require('expect');
var boardReducer = require('../src/my_redux/board_reducer');

function testAll() {
  console.log('setup is good!');
  testDeepFreeze();
  addsPiece();
  emptryAction();
  undefinedState();
  doesntReplaceExistingPiece();
  resetGame();
};

function testDeepFreeze() {
  var stateBefore = ['', '', '', '', '', '', '', '', ''];
  var action = {
    type:'ADD_PIECE',
    piece: 'X',
    position: 0,
  };
  deepFreeze(stateBefore);
  boardReducer(stateBefore, action);

  console.log('deepFreeze is working!');
};

function addsPiece() {
  var stateBefore = ['', '', '', '', '', '', '', '', ''];
  var stateAfter = ['X', '', '', '', '', '', '', '', ''];
  var action = {
    type:'ADD_PIECE',
    piece: 'X',
    position: 0,
  };
  deepFreeze(stateBefore);

  expect(
    boardReducer(stateBefore, action)
  ).toEqual(stateAfter);
  console.log('adds piece to position!');
};

function emptryAction() {
  var stateBefore = ['', '', '', '', '', '', '', '', ''];
  var stateAfter = ['', '', '', '', '', '', '', '', ''];
  var action = {};
  deepFreeze(stateBefore);

  expect(
    boardReducer(stateBefore, action)
  ).toEqual(stateAfter);
  console.log('returns the same state when action is invalid!');
};

function undefinedState() {
  var stateBefore = undefined;
  var stateAfter = ['', '', '', '', '', '', '', '', ''];
  var action = {};

  expect(
    boardReducer(stateBefore, action)
  ).toEqual(stateAfter);
  console.log('returns default state if state is invalid!');
};

function doesntReplaceExistingPiece() {
  var stateBefore = ['O', '', '', '', '', '', '', '', ''];
  var stateAfter = ['O', '', '', '', '', '', '', '', ''];
  var action = {
    type:'ADD_PIECE',
    piece: 'X',
    position: 0,
  };
  deepFreeze(stateBefore);

  expect(
    boardReducer(stateBefore, action)
  ).toEqual(stateAfter);
  console.log('does not replace existing piece!');
};

function resetGame() {
  var stateBefore = ['', '', '', '', '', '', '', '', ''];
  var stateAfter = ['', '', '', '', '', '', '', '', ''];
  var action = {
    type:'RESET_BOARD',
  };
  deepFreeze(stateBefore);

  expect(
    boardReducer(stateBefore, action)
  ).toEqual(stateAfter);
  console.log('resets the game!');
};

testAll();
