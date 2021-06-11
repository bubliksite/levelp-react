import {combineReducers} from 'redux'
import taskReducer from './todos'
import categoryReducer from './categories'

const rootReducer = combineReducers({
  task: taskReducer,
  category: categoryReducer
})

export default rootReducer
