import { combineReducers, createStore, applyMiddleware } from 'redux'

// ACTIONS
export const nextPeople = page => ({
  type: 'NEXT_PEOPLE',
  page,
})
export const prevPeople = page => ({
  type: 'PREV_PEOPLE',
  page,
})

// REDUCERS
export const people = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_PEOPLE':
      return state + 1
    case 'PREV_PEOPLE':
      return state - 1
    default:
      return state
  }
}
export const reducers = combineReducers({
  people,
})

// STORE
export function configureStore() {
  const store = createStore(reducers, applyMiddleware(checkPage))
  return store
}
export const store = configureStore()

// MIDDLEWARE
function checkPage({ getState }) {
  return next => action => {
    return (
      (getState().people === 1 && action.type === 'PREV_PEOPLE')
        || 
      (getState().people === 9 && action.type === 'NEXT_PEOPLE') 
        ? 
        console.log('no more results')
        : 
        next(action)
      )
  }
}