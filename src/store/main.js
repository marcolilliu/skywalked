import { createStore, applyMiddleware } from 'redux'
import combineReducers from '../reducers/main'
import logger from '../middleware/logger'
import crashReporter from '../middleware/crashReporter'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
    combineReducers,
    // applyMiddleware() tells createStore() how to handle middleware
    applyMiddleware(
        thunkMiddleware,
        logger,
        crashReporter
    )
  )

export default store