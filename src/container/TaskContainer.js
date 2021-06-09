import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import TodoList from '../components/TodoList'
import {actionCreateToDo} from '../store/todos'

//Пример "умного" компонента
export default function TaskContainer() {
  const todos = useSelector((state) => state.task)

  const [change, setChange] = useState('')

  const handlerChangeInput = (e) => {
    setChange(e.target.value)
  }
  const dispatch = useDispatch()

  const handlerAddToDo = (e) => {
    e.preventDefault()
    const data = {
      id: Date.now(),
      title: change
    }
    dispatch(actionCreateToDo(data))
    setChange('')
  }
  return (
    <TodoList
      todos={todos}
      change={change}
      handlerAddToDo={handlerAddToDo}
      handlerChangeInput={handlerChangeInput}
    />
  )
}
