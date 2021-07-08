import React from 'react'
import ModalEditCategory from '../components/Modals/ModalEditCategory'
import {actionHideModal} from '../store/modals'
import {useDispatch, useSelector} from 'react-redux'
import {getTodo} from '../store/todos/selectors'
import {actionTransferCategory} from '../store/categories'

export default function ModalEditTaskContainer({
  name,
  todoId,
  categoryId,
  categoryTitle
}) {
  const todos = useSelector((state) => getTodo(state))
  const dispatch = useDispatch()
  const handlerTransferCategory = (taskId) => {
    const data = {
      taskId,
      categoryId
    }
    dispatch(actionTransferCategory(data))
  }
  const handlerHideModal = () => {
    dispatch(actionHideModal())
  }
  return (
    <ModalEditCategory
      todos={todos}
      name={name}
      todoId={todoId}
      categoryTitle={categoryTitle}
      categoryId={categoryId}
      handlerTransferCategory={handlerTransferCategory}
      handlerHideModal={handlerHideModal}
    />
  )
}
