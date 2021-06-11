import React from 'react'
import TaskContainer from '../../container/TaskContainer'
import CategoryList from '../CategoryList'

function Homework() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <TaskContainer />
        </div>
        <div className="col-md-6">
          <CategoryList />
        </div>
      </div>
    </div>
  )
}

export default Homework
