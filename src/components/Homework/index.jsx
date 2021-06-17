import React from 'react'
import TaskContainer from '../../container/TaskContainer'
import CategoryContainer from '../../container/CategoryContainer'

function Homework() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <TaskContainer />
        </div>
        <div className="col-md-6">
          <CategoryContainer />
        </div>
      </div>
    </div>
  )
}

export default Homework
