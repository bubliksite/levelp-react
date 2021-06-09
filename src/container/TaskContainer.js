import React from 'react'
import {useSelector} from 'react-redux'
import TodoList from '../components/TodoList'

export default function TaskContainer() {
  const todos = useSelector((state) => state.task)
  return <TodoList todos={todos} />
}
