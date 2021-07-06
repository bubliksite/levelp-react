import {combineReducers} from 'redux'
import taskReducer from './todos'
import categoryReducer from './categories'
import modalReducer from './modals'

const rootReducer = combineReducers({
  task: taskReducer,
  category: categoryReducer,
  modal: modalReducer
})

export default rootReducer
