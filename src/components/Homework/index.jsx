import React from 'react'
import TaskContainer from '../../container/TaskContainer'
import CategoryContainer from '../../container/CategoryContainer'
import ProgressBarContainer from '../../container/ProgressBarContainer'
import SearchCategory from '../SearchCategory'

function Homework() {
  return (
    <div className="container">
      <div className="mb-3">
        <ProgressBarContainer />
        <SearchCategory />
        <hr />
      </div>
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
