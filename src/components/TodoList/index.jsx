import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

import Button from '../Button'
import Input from '../Input'

//Пример "глупого" компонента
const TodoList = ({
  todos,
  change,
  handlerChangeInput,
  handlerAddToDo,
  handlerDeleteTodo
}) => {
  return (
    <div className="container">
      <div className="form-inline mb-4">
        <div className="form-group col-sm-10 p-0">
          <Input
            classes="form-control w-100"
            placeholder="Add task"
            value={change}
            onChange={(e) => handlerChangeInput(e)}
          />
        </div>
        <div className="form-group col-sm-2 p-0 pl-sm-3">
          <Button
            classes="w-100"
            variant="warning"
            title="Add"
            onClick={(e) => handlerAddToDo(e)}
          />
        </div>
      </div>
      {/*Показывать только, если есть список, иначе 'Список пуст'*/}
      <ListGroup>
        {todos.task.map((item) => (
          <ListGroupItem
            className="list-group-item-action d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <Link to={`/todolist/${item.id}`}>{item.title}</Link>
            <Button
              title="Remove"
              variant="danger"
              classes="btn-sm"
              onClick={() => handlerDeleteTodo(item.id)}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
}

export default TodoList

TodoList.propTypes = {
  todos: PropTypes.object,
  change: PropTypes.string,
  handlerChangeInput: PropTypes.func,
  handlerAddToDo: PropTypes.func
}
