import expect from 'expect'
import deepFreeze from 'deep-freeze'
import appReducer from '../src/stateManagement/reducers/appReducer.js'
import { describe, it } from 'mocha' // Not required, but shows where these functions come from

describe('App Reducer', function() {
  it('returns a default state if passed an undefined state', function() {
    const stateBefore = undefined
    const action = {}
    const stateAfter = {
      scale: 1,
      gameState: {
        currentPlayer: 'X',
        boardState: ['', '', '', '', '', '', '', '', ''],
        gameOver: false
      }
    }
    deepFreeze(action)

    expect(
      appReducer(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('passes back the same state if given an invalid action', function() {
    const stateBefore = {
      scale: 1,
      gameState: {
        currentPlayer: 'O',
        boardState: ['', 'X', 'O', '', '', 'O', '', '', 'X'],
        gameOver: false
      }
    }
    const action = {}
    deepFreeze(action)
    deepFreeze(stateBefore)

    expect(
      appReducer(stateBefore, action)
    ).toEqual(stateBefore)
  })

})
