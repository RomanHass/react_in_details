import { reducer, StateType } from "./reducer"

test('expanded should be false', () => {
  // data
  const state: StateType = {
    expanded: true
  }

  // action 
  const newState = reducer(state, {type: 'TOGGLE-EXPANDED'})

  // expect
  expect(newState.expanded).toBe(false)
})


test('expanded should be true', () => {
  // data
  const state: StateType = {
    expanded: false
  }

  // action 
  const newState = reducer(state, {type: 'TOGGLE-EXPANDED'})

  // expect
  expect(newState.expanded).toBe(true)
})

test('expanded should throw error because action type is not correct', () => {
  // data
  const state: StateType = {
    expanded: false
  }

  // action 
  //expect
  expect(() => {
    reducer(state, {type: 'FAKETYPE'})
  }).toThrowError()

})