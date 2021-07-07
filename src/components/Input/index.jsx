import React from 'react'
import PropTypes from 'prop-types'

function Input({placeholder, value, onChange, classes}) {
  return (
    <>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        className={classes}
      />
    </>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string
}

export default Input
