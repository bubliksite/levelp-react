import React from 'react'
import PropTypes from 'prop-types'
import {Button as BootstrapButton} from 'react-bootstrap'

function Button({onClick, title, classes, disabled, variant}) {
  return (
    <BootstrapButton
      className={classes}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      {title}
    </BootstrapButton>
  )
}

Button.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Button
