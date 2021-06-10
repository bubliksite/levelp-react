const initState = {
  task: []
}

const actionType = {
  ADD_TASK: 'ADD_TASK'
}

export const actionCreateToDo = (payload) => {
  return {
    type: actionType.ADD_TASK,
    payload
  }
}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_TASK:
      return {...state, task: [...state.task, action.payload]}
    default:
      return state
  }
}

export default taskReducer
