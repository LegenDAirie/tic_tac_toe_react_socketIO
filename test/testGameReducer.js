import expect from 'expect'
import deepFreeze from 'deep-freeze'
import gameReducer from '../src/stateManagement/reducers/gameReducer.js'
import { describe, it } from 'mocha' // Not required, but shows where these functions come from

describe('Game Reducer', function() {
  it('returns a default state if passed an undefined state', function() {
    const stateBefore = undefined
    const action = {}
    const stateAfter = {
      gameOver: false,
      currentPlayer: 'X',
      boardState: ['', '', '', '', '', '', '', '', '']
    }

    expect(
      gameReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('passes back the same state if given an invalid action', function() {
    // const stateBefore = {
    //   gameOver: false,
    //   currentPlayer: 'X',
    //   boardState: ['', '', '', '', '', '', '', '', '']
    // }
    // const stateAfter = {
    //   gameOver: false,
    //   currentPlayer: 'X',
    //   boardState: ['', '', '', '', '', '', '', '', '']
    // }
    // const action = {}
    //
    // expect(
    //   gameReducer(stateBefore, action)
    // ).toEqual(stateAfter)
  })
})
