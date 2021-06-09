import React, {useState} from 'react'
import './style.scss'
import {useDispatch} from 'react-redux'
import {actionCreateToDo} from '../../store/todos'

//Пример "глупого" компонента
const TodoList = ({todos}) => {
  const dispatch = useDispatch()
  const [change, setChange] = useState('')

  const handlerChangeInput = (e) => {
    setChange(e.target.value)
  }
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
    <div className="container">
      <form className="form-inline mb-4">
        <div className="form-group col-sm-10 p-0">
          <input
            className="form-control w-100"
            type="text"
            placeholder="Add task"
            value={change}
            onChange={(e) => handlerChangeInput(e)}
          />
        </div>
        <div className="form-group col-sm-2 p-0 pl-sm-3">
          <button className="btn-default w-100" onClick={handlerAddToDo}>
            Add
          </button>
        </div>
      </form>

      <ul className="list">
        {todos.task.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
