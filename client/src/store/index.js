import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import postReducer from './reducers/postReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  userReducer,
  postReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store