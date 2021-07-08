const initState = {
  task: []
}

const actionType = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  GET_TODOS_FROM_LOCAL_STORAGE: 'GET_TODOS_FROM_LOCAL_STORAGE',
  CLEAR_TODOS_FROM_LOCAL_STORAGE: 'CLEAR_TODOS_FROM_LOCAL_STORAGE'
}

export const actionCreateToDo = (payload) => {
  return {
    type: actionType.ADD_TASK,
    payload
  }
}

export const actionDeleteTodo = (payload) => {
  return {
    type: actionType.DELETE_TASK,
    payload
  }
}

export const actionEditTodo = (payload) => {
  return {
    type: actionType.EDIT_TASK,
    payload
  }
}

export const actionGetTodoFromLocalStorage = (payload) => {
  return {
    type: actionType.GET_TODOS_FROM_LOCAL_STORAGE,
    payload
  }
}

export const actionClearTodoFromLocalStorage = () => {
  return {
    type: actionType.CLEAR_TODOS_FROM_LOCAL_STORAGE
  }
}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_TASK:
      return {...state, task: [action.payload, ...state.task]}
    case actionType.DELETE_TASK:
      return {
        ...state,
        task: state.task.filter((item) => item.id !== action.payload)
      }
    case actionType.EDIT_TASK:
      return {
        ...state,
        task: state.task.map((item) =>
          item.id === action.payload.id
            ? {...item, title: action.payload.title}
            : item
        )
      }
    case actionType.GET_TODOS_FROM_LOCAL_STORAGE:
      return {...state, task: [...state.task, ...action.payload]}
    case actionType.CLEAR_TODOS_FROM_LOCAL_STORAGE:
      return {...state, task: []}
    default:
      return state
  }
}

export default taskReducer
