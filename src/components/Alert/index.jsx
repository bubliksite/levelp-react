import React from 'react'
import PropTypes from 'prop-types'

import {Alert as BootstrapAlert} from 'react-bootstrap'

function Alert({text, type}) {
  return (
    <BootstrapAlert className={'alert-' + type}>
      <small>{text}</small>
    </BootstrapAlert>
  )
}

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

export default Alert
