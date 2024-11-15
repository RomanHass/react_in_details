type ActionType = {
  type: string
}

export type StateType = {
  expanded: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch(action.type) {
    case 'TOGGLE-EXPANDED':
      console.log('reducer:',state);
      return {...state, expanded: !state.expanded}
    default: 
      throw new Error('Bad action type')
  }
}