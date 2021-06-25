import React from 'react'
import './style.scss'
import PropTypes from 'prop-types'

import './style.scss'

import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Trash} from 'react-bootstrap-icons'

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
  handlerDeleteTodo
}) => {
  return (
    <>
      <form className="d-flex mb-4" onSubmit={(e) => handlerAddToDo(e)}>
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
      {alert ? <Alert type="danger" text="This field can't be empty" /> : ''}
      <ListGroup>
        {todos.task.length ? (
          todos.task.map((item) => (
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
                  title={<Trash size="20" />}
                  variant="danger"
                  classes="btn-sm"
                  onClick={() => handlerDeleteTodo(item.id)}
                />
              </div>
            </ListGroupItem>
          ))
        ) : (
          <Alert type="light" text="This list is empty" />
        )}
      </ListGroup>
    </>
  )
}

export default TodoList

TodoList.propTypes = {
  todos: PropTypes.object,
  change: PropTypes.string,
  handlerChangeInput: PropTypes.func,
  handlerAddToDo: PropTypes.func
}
