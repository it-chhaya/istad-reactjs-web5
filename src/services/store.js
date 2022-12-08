import { legacy_createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk]

const store = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
)

export default store