import React, {useState} from 'react'
import ModalEditTask from '../components/Modals/ModalEditTask'
import {useDispatch, useSelector} from 'react-redux'
import {actionHideModal} from '../store/modals'
import {getTodo} from '../store/todos/selectors'
import {actionEditTodo} from '../store/todos'

export default function ModalEditTaskContainer({id}) {
  const {task} = useSelector((state) => getTodo(state))
  const dispatch = useDispatch()
  const title = task.find((item) => item.id === id).title
  const [value, setValue] = useState(title)

  const handlerChangeInput = (e) => {
    setValue(e.target.value)
  }

  const handlerEditTask = () => {
    const data = {
      title: value,
      id
    }
    dispatch(actionEditTodo(data))
    console.log(task)
    handlerHideModal()
  }

  const handlerHideModal = () => {
    dispatch(actionHideModal())
  }

  return (
    <ModalEditTask
      handlerHideModal={handlerHideModal}
      handlerChangeInput={handlerChangeInput}
      handlerEditTask={handlerEditTask}
      title={title}
      value={value}
    />
  )
}
