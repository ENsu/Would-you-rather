import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'
// thunk to help handle asynchronous API calls during action

export default applyMiddleware(
    thunk,
    logger
)
