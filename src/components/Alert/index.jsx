import React from 'react'
import PropTypes from 'prop-types'

import {Alert as BootstrapAlert} from 'react-bootstrap'

function Alert({text, type}) {
  return <BootstrapAlert clasName={'alert-' + type}>{text}</BootstrapAlert>
}

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string
}

export default Alert
