const initState = {
  category: []
}

const actionType = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  EDIT_CATEGORY: 'EDIT_CATEGORY',
  EDIT_CHECKED_CATEGORY: 'EDIT_CHECKED_CATEGORY',
  TRANSFER_CATEGORY: 'TRANSFER_CATEGORY'
}

export const actionCreateCategory = (payload) => {
  return {
    type: actionType.ADD_CATEGORY,
    payload
  }
}

export const actionEditCheckCategory = (payload) => {
  return {
    type: actionType.EDIT_CHECKED_CATEGORY,
    payload
  }
}

export const actionDeleteCategory = (payload) => {
  return {
    type: actionType.DELETE_CATEGORY,
    payload
  }
}

export const actionTransferCategory = (payload) => {
  return {
    type: actionType.TRANSFER_CATEGORY,
    payload
  }
}

export const actionEditCategory = (payload) => {
  return {
    type: actionType.EDIT_CATEGORY,
    payload
  }
}

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_CATEGORY:
      return {state, category: [action.payload, ...state.category]}
    case actionType.EDIT_CHECKED_CATEGORY:
      return {
        ...state,
        category: state.category.map((item) =>
          item.id === action.payload.id
            ? {...item, checked: action.payload.checked}
            : item
        )
      }
    case actionType.EDIT_CATEGORY:
      return {
        ...state,
        category: state.category.map((item) =>
          item.id === action.payload.id
            ? {...item, checked: action.payload.checked}
            : item
        )
      }
    case actionType.TRANSFER_CATEGORY:
      return {
        ...state,
        category: state.category.map((item) =>
          item.id === action.payload.categoryId
            ? {...item, todoId: action.payload.taskId}
            : item
        )
      }
    case actionType.DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter((item) => item.id !== action.payload)
      }
    default:
      return state
  }
}

export default categoryReducer
