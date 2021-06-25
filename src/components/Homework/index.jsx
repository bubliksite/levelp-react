import React from 'react'
import TaskContainer from '../../container/TaskContainer'
import CategoryContainer from '../../container/CategoryContainer'

function Homework() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mb-5">
          <TaskContainer />
        </div>
        <div className="col-md-7 mb-5">
          <CategoryContainer />
        </div>
      </div>
    </div>
  )
}

export default Homework
