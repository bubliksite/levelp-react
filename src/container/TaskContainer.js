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
import {getCategory} from '../store/categories/selectors'

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
    this.props.actionShowModal({
      name: 'modalDelete',
      id: idTodo,
      title: titleTodo
    })
  }

  removeTodoFromLocalStorage = () => {
    window.localStorage.clear()
    this.props.actionClearTodoFromLocalStorage()
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

  showModalEditTask = (taskId) => {
    this.props.actionShowModal({
      name: 'modalEditTask',
      id: taskId
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

  componentDidMount() {
    this.getTodoFromLocalStorage()
    console.log(this.props)
  }
  render() {
    const {todos} = this.props
    const {categories} = this.props
    const {change} = this.state
    const {alert} = this.state
    return (
      <TodoList
        todos={todos}
        categories={categories}
        change={change}
        alert={alert}
        actionShowModal={this.props.actionShowModal}
        handlerChangeInput={this.handlerChangeInput}
        handlerDeleteTodo={this.handlerDeleteTodo}
        handlerAddToDo={this.handlerAddToDo}
        showModalEditTask={this.showModalEditTask}
        saveTodoToLocalStorage={this.saveTodoToLocalStorage}
        removeTodoFromLocalStorage={this.removeTodoFromLocalStorage}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getTodo(state),
    categories: getCategory(state)
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
    actionShowModal: (payload) => dispatch(actionShowModal(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
