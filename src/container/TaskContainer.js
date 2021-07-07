import React from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {
  actionCreateToDo,
  actionDeleteTodo,
  actionGetTodoFromLocalStorage,
  actionClearTodoFromLocalStorage
} from '../store/todos'
import {getTodo} from '../store/todos/selectors'
import {actionShowModal} from '../store/modals'

//Пример "умного" компонента (классовый)
class TaskContainer extends React.Component {
  state = {
    change: '',
    alert: {show: false, message: '', type: ''}
  }

  handlerChangeInput = (e) => {
    this.setEmptyListAlert()
    this.setState({
      alert: {show: false, message: '', type: ''},
      change: e.target.value
    })
  }

  handlerAddToDo = (e) => {
    const {change} = this.state
    e.preventDefault()
    if (change) {
      const data = {
        id: Date.now(),
        title: change
      }
      this.props.handlerAddToDo(data)
      this.setState({change: ''})
      setTimeout(() => this.saveTodoToLocalStorage(), 0)
    } else {
      this.setState({
        alert: {
          show: true,
          message: "This field can't be empty",
          type: 'danger'
        }
      })
    }
  }

  handlerDeleteTodo = (idTodo, titleTodo) => {
    this.props.actionModalDelete({
      name: 'modalDelete',
      id: idTodo,
      title: titleTodo
    })
  }

  removeTodoFromLocalStorage = () => {
    window.localStorage.clear()
    this.props.actionClearTodoFromLocalStorage()
    setTimeout(() => this.setEmptyListAlert(), 0)
  }

  saveTodoToLocalStorage = () => {
    window.localStorage.setItem('todos', JSON.stringify(this.props.todos))
  }

  getTodoFromLocalStorage = () => {
    const getTodo = window.localStorage.getItem('todos')
    if (getTodo) {
      const {task} = JSON.parse(getTodo)
      this.props.actionGetTodoFromLocalStorage(task)
    }
  }

  setEmptyListAlert = () => {
    if (!this.props.todos.task.length) {
      this.setState({
        alert: {
          show: true,
          message: 'The list is empty',
          type: 'light'
        }
      })
    }
  }

  componentDidMount() {
    this.getTodoFromLocalStorage()
    setTimeout(() => this.setEmptyListAlert(), 0)
  }
  render() {
    const {todos} = this.props
    const {change} = this.state
    const {alert} = this.state
    return (
      <TodoList
        todos={todos}
        change={change}
        alert={alert}
        actionModalDelete={this.props.actionModalDelete}
        handlerChangeInput={this.handlerChangeInput}
        handlerDeleteTodo={this.handlerDeleteTodo}
        handlerAddToDo={this.handlerAddToDo}
        saveTodoToLocalStorage={this.saveTodoToLocalStorage}
        removeTodoFromLocalStorage={this.removeTodoFromLocalStorage}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getTodo(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerAddToDo: (payload) => dispatch(actionCreateToDo(payload)),
    handlerDeleteTodo: (payload) => dispatch(actionDeleteTodo(payload)),
    actionGetTodoFromLocalStorage: (payload) =>
      dispatch(actionGetTodoFromLocalStorage(payload)),
    actionClearTodoFromLocalStorage: () =>
      dispatch(actionClearTodoFromLocalStorage()),
    actionModalDelete: (payload) => dispatch(actionShowModal(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
