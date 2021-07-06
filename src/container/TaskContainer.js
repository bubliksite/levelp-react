import React from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {
  actionCreateToDo,
  actionDeleteTodo,
  actionGetTodoFromLocalStorage,
  clearTodoFromLocalStorage
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
    // this.props.handlerDeleteTodo(idTodo)
    // this.clearAlert()
    // setTimeout(() => this.saveTodoToLocalStorage(), 0)
    // setTimeout(() => this.setEmptyListAlert(), 0)
    this.props.actionModalDelete({
      name: 'modalDelete',
      id: idTodo,
      title: titleTodo
    })
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

  clearAlert = () => {
    this.setState({
      alert: {
        show: false,
        message: '',
        type: ''
      }
    })
  }

  getTodoFromLocalStorage = () => {
    const getTodo = window.localStorage.getItem('todos')
    if (getTodo) {
      const {task} = JSON.parse(getTodo)
      this.props.actionGetTodoFromLocalStorage(task)
    }
  }

  saveTodoToLocalStorage = () => {
    this.clearAlert()
    window.localStorage.setItem('todos', JSON.stringify(this.props.todos))
  }

  removeTodoFromLocalStorage = () => {
    window.localStorage.clear()
    this.props.clearTodoFromLocalStorage()
    setTimeout(() => this.setEmptyListAlert(), 0)
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
    clearTodoFromLocalStorage: () => dispatch(clearTodoFromLocalStorage()),
    actionModalDelete: (payload) => dispatch(actionShowModal(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
