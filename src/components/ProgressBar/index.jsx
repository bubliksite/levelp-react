import React from 'react'
import PropTypes from 'prop-types'
import {ProgressBar as ProgressBarBootstrap} from 'react-bootstrap'

const ProgressBar = ({completedCategory}) => {
  return (
    <div className="mt-4 w-100">
      <ProgressBarBootstrap
        now={completedCategory}
        label={`${parseInt(completedCategory)}%`}
        animated
        variant="warning"
      />
    </div>
  )
}

ProgressBar.propTypes = {
  completedCategory: PropTypes.number
}

export default ProgressBar
