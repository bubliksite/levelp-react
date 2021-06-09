import React from 'react'
import './style.scss'

//Пример "глупого" компонента
const TodoList = ({todos, change, handlerChangeInput, handlerAddToDo}) => {
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
