import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

import './style.scss'

import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Trash, Check2Circle, XCircle, PencilSquare} from 'react-bootstrap-icons'

import Button from '../Button'
import Input from '../Input'
import Alert from '../Alert'

//Пример "глупого" компонента
const TodoList = ({
  todos,
  change,
  alert,
  handlerChangeInput,
  handlerAddToDo,
  handlerDeleteTodo,
  saveTodoToLocalStorage,
  removeTodoFromLocalStorage,
  showModalEditTask
}) => {
  return (
    <>
      <form className="d-flex" onSubmit={(e) => handlerAddToDo(e)}>
        <div className="form-group flex-grow-1">
          <Input
            classes="form-control w-100"
            placeholder="Add task"
            value={change}
            onChange={(e) => handlerChangeInput(e)}
          />
        </div>
        <div className="form-group ml-3">
          <Button
            classes="w-100"
            variant="info"
            title="Add"
            onClick={(e) => handlerAddToDo(e)}
          />
        </div>
      </form>
      {alert.show ? <Alert type={alert.type} text={alert.message} /> : ''}

      <ListGroup>
        {todos.task.length
          ? todos.task.map((item) => (
              <ListGroupItem
                className="list-group-item-action d-flex justify-content-between align-items-center"
                variant="info"
                key={item.id}
              >
                <Link to={`/homework/${item.id}`} className="pr-4 text-left">
                  {item.title}
                </Link>
                <div>
                  <Button
                    icon={<PencilSquare size="20" />}
                    variant="link"
                    classes="btn-sm mr-2 text-body"
                    onClick={() => showModalEditTask(item.id)}
                  />
                  <Button
                    icon={<Trash size="20" />}
                    variant="danger"
                    classes="btn-sm"
                    onClick={() => handlerDeleteTodo(item.id, item.title)}
                  />
                </div>
              </ListGroupItem>
            ))
          : null}
      </ListGroup>
      <div className="d-flex justify-content-around">
        <Button
          title="Save"
          icon={<Check2Circle size="20" />}
          variant="success"
          classes="btn-sm mt-4"
          onClick={() => saveTodoToLocalStorage()}
        />
        <Button
          title="Clear"
          icon={<XCircle size="20" />}
          variant="danger"
          disabled={!todos.task.length}
          classes="btn-sm mt-4"
          onClick={() => removeTodoFromLocalStorage()}
        />
      </div>
    </>
  )
}

export default TodoList

TodoList.propTypes = {
  todos: PropTypes.object,
  change: PropTypes.string,
  alert: PropTypes.object,
  handlerChangeInput: PropTypes.func,
  handlerAddToDo: PropTypes.func,
  handlerDeleteTodo: PropTypes.func,
  saveTodoToLocalStorage: PropTypes.func,
  removeTodoFromLocalStorage: PropTypes.func,
  showModalEditTask: PropTypes.func
}
