import React, {useState} from 'react'
import ModalEditTask from '../components/Modals/ModalEditTask'
import {useDispatch, useSelector} from 'react-redux'
import {actionHideModal} from '../store/modals'
import {getTodo} from '../store/todos/selectors'

export default function ModalEditTaskContainer({id}) {
  const {task} = useSelector((state) => getTodo(state))
  const title = task.find((item) => item.id === id).title
  const [value, setValue] = useState(title)

  const handlerChangeInput = (e) => {
    setValue(e.target.value)
  }

  const dispatch = useDispatch()
  const handlerHideModal = () => {
    dispatch(actionHideModal())
  }
  return (
    <ModalEditTask
      handlerHideModal={handlerHideModal}
      handlerChangeInput={handlerChangeInput}
      title={title}
      value={value}
    />
  )
}
