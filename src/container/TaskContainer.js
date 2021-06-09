import React from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {actionCreateToDo} from '../store/todos'

//Пример "умного" компонента (классовый)
class TaskContainer extends React.Component {
  state = {
    change: ''
  }

  handlerChangeInput = (e) => {
    this.setState({change: e.target.value})
  }

  handlerAddToDo = (e) => {
    e.preventDefault()
    const data = {
      id: Date.now(),
      title: this.state.change
    }
    this.props.handlerAddToDo(data)
    this.setState({change: ''})
  }
  render() {
    const {todos} = this.props
    const {change} = this.state
    return (
      <TodoList
        todos={todos}
        change={change}
        handlerChangeInput={this.handlerChangeInput}
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
    handlerAddToDo: (payload) => dispatch(actionCreateToDo(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
