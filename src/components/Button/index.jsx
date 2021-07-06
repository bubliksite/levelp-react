import React from 'react'
import PropTypes from 'prop-types'
import {Button as BootstrapButton} from 'react-bootstrap'

function Button({onClick, icon, title, classes, disabled, variant}) {
  return (
    <BootstrapButton
      className={classes}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      <span className="d-flex align-items-center">
        <span
          className={
            (icon && title ? 'mr-2' : '') + ' d-flex align-item-center'
          }
        >
          {icon}
        </span>
        {title}
      </span>
    </BootstrapButton>
  )
}

Button.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export default Button
