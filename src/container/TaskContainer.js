import React from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {actionCreateToDo, actionDeleteTodo, getTodosThunk} from '../store/todos'

//Пример "умного" компонента (классовый)
class TaskContainer extends React.Component {
  state = {
    change: ''
  }

  handlerChangeInput = (e) => {
    this.setState({change: e.target.value})
  }

  handlerAddToDo = (e) => {
    const {change} = this.state
    if (change) {
      e.preventDefault()
      const data = {
        id: Date.now(),
        title: change
      }
      this.props.handlerAddToDo(data)
      this.setState({change: ''})
    } else {
      //Действия для пустого поля ввода
    }
  }

  handlerDeleteTodo = (idTodo) => {
    this.props.handlerDeleteTodo(idTodo)
  }

  componentDidMount() {
    this.props.getTodosThunk()
  }

  render() {
    const {todos} = this.props
    const {change} = this.state
    return (
      <TodoList
        todos={todos}
        change={change}
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
