import reducer from './reducers/index'
import logger from './middlewares/logger'
import thunk from 'redux-thunk'

const { createStore, applyMiddleware } = require('redux')

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
)

export default store