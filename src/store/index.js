import {combineReducers} from 'redux'
import taskReducer from './todos'

const rootReducer = combineReducers({
  task: taskReducer
})

export default rootReducer
