import React from 'react'

import {ProgressBar as ProgressBarBootstrap} from 'react-bootstrap'

import PropTypes from 'prop-types'

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

export default ProgressBar

ProgressBar.propTypes = {
  completedCategory: PropTypes.number
}
