import { combineReducers, createStore } from 'redux';

// actions.js
export const nextPeople = page => ({
  type: 'NEXT_PEOPLE',
  page,
});

export const prevPeople = page => ({
  type: 'PREV_PEOPLE',
  page,
});

// reducers.js
export const people = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_PEOPLE':
      return state + 1
    case 'PREV_PEOPLE':
        return state - 1
    default:
      return state
  }
};

export const reducers = combineReducers({
  people,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState)
  return store
}

export const store = configureStore()