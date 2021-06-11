import React from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {actionCreateToDo, actionDeleteTodo, getTodosThunk} from '../store/todos'

//Пример "умного" компонента (классовый)
class TaskContainer extends React.Component {
  state = {
    change: '',
    alert: false,
    showSpinner: true
  }

  handlerChangeInput = (e) => {
    this.setState({alert: false})
    this.setState({change: e.target.value})
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
      this.setState({alert: true})
    }
  }

  handlerDeleteTodo = (idTodo) => {
    this.props.handlerDeleteTodo(idTodo)
    if (this.props.todos.length === 1) {
      this.setState({setShowSpinner: false})
    }
  }

  componentDidMount() {
    this.props.getTodosThunk()
  }

  render() {
    const {todos} = this.props
    const {change} = this.state
    const {alert} = this.state
    const {showSpinner} = this.state
    return (
      <TodoList
        todos={todos}
        change={change}
        alert={alert}
        showSpinner={showSpinner}
        handlerChangeInput={this.handlerChangeInput}
        handlerDeleteTodo={this.handlerDeleteTodo}
        handlerAddToDo={this.handlerAddToDo}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.task
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerAddToDo: (payload) => dispatch(actionCreateToDo(payload)),
    handlerDeleteTodo: (payload) => dispatch(actionDeleteTodo(payload)),
    getTodosThunk: () => dispatch(getTodosThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
