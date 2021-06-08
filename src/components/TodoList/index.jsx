import React, {useState} from 'react'
import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import {actionCreateToDo} from '../../store/todos'

const TodoList = () => {
  const todos = useSelector((state) => state.task)
  const dispatch = useDispatch()
  const [change, setChange] = useState('')

  const handlerChangeInput = (e) => {
    setChange(e.target.value)
  }
  const handlerAddToDo = () => {
    const data = {
      id: Date.now(),
      title: change
    }
    dispatch(actionCreateToDo(data))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add task"
        value={change}
        onChange={(e) => handlerChangeInput(e)}
      />
      <button className="btn-default" onClick={handlerAddToDo}>
        Add
      </button>
      <ul className="list">
        {todos.task.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
