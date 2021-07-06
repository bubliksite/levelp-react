const initState = []

const actionType = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL'
}

export const actionShowModal = (payload) => {
  return {
    type: actionType.SHOW_MODAL,
    payload
  }
}

export const actionHideModal = () => {
  return {
    type: actionType.HIDE_MODAL
  }
}

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SHOW_MODAL:
      return [...state, action.payload]
    case actionType.HIDE_MODAL:
      state.splice(-1, 1)
      return [...state]
    default:
      return state
  }
}

export default modalReducer
