import React, {useState} from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import {useRouteMatch} from 'react-router-dom'

import './style.scss'

import {Link} from 'react-router-dom'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {
  Trash,
  Check2Circle,
  XCircle,
  PencilSquare,
  CheckCircle,
  PlusCircleDotted
} from 'react-bootstrap-icons'

import Button from '../Button'
import Input from '../Input'
import Alert from '../Alert'

//Пример "глупого" компонента

const TodoList = ({
  todos,
  categories,
  change,
  name,
  todoId,
  alert,
  handlerChangeInput,
  handlerAddToDo,
  handlerDeleteTodo,
  saveTodoToLocalStorage,
  removeTodoFromLocalStorage,
  showModalEditTask,
  handlerTransferCategory
}) => {
  const [todoIdLive, setTodoIdLive] = useState(todoId)
  const match = useRouteMatch('/homework/:id')
  const urlId = +match?.params.id
  return (
    <>
      {!name ? (
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
      ) : null}
      {!name && alert.show ? (
        <Alert type={alert.type} text={alert.message} />
      ) : (
        ''
      )}

      <ListGroup>
        {todos.task.length
          ? todos.task.map((item) => (
              <ListGroupItem
                className="list-group-item-action d-flex justify-content-between align-items-center"
                variant={item.id === todoIdLive ? 'warning' : 'info'}
                key={item.id}
                active={item.id === urlId && !name}
              >
                {!name ? (
                  <Link to={`/homework/${item.id}`} className="pr-4 text-left">
                    {item.title + ' '}
                    <small>
                      (
                      {
                        categories.category.filter(
                          (cat) => cat.todoId === item.id
                        ).length
                      }
                      )
                    </small>
                  </Link>
                ) : (
                  <p className="pr-4 mb-0 text-left">{item.title}</p>
                )}
                {!name ? (
                  <div>
                    <Button
                      icon={<PencilSquare size="20" />}
                      variant="link"
                      classes={
                        'btn-sm mr-2 ' +
                        (urlId === item.id ? 'text-white' : 'text-body')
                      }
                      onClick={() => showModalEditTask(item.id)}
                    />
                    <Button
                      icon={<Trash size="20" />}
                      variant="danger"
                      classes="btn-sm"
                      onClick={() => handlerDeleteTodo(item.id, item.title)}
                    />
                  </div>
                ) : (
                  <Button
                    icon={
                      item.id === todoIdLive ? (
                        <CheckCircle size="20" />
                      ) : (
                        <PlusCircleDotted size="20" />
                      )
                    }
                    variant={item.id === todoIdLive ? 'warning' : 'info'}
                    classes="btn-sm"
                    disabled={item.id === todoIdLive}
                    onClick={() => {
                      handlerTransferCategory(item.id)
                      setTodoIdLive(item.id)
                    }}
                  />
                )}
              </ListGroupItem>
            ))
          : null}
      </ListGroup>
      {!name ? (
        <div className="d-flex justify-content-around">
          <Button
            title="Save"
            icon={<Check2Circle size="20" />}
            variant="success"
            classes="btn-sm mt-4 px-4"
            onClick={() => saveTodoToLocalStorage()}
          />
          <Button
            title="Clear"
            icon={<XCircle size="20" />}
            variant="danger"
            disabled={!todos.task.length}
            classes="btn-sm mt-4 px-4"
            onClick={() => removeTodoFromLocalStorage()}
          />
        </div>
      ) : null}
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
