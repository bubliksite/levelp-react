import React from 'react'
import './style.scss'

function Button(props) {
  const {isShow, onClick} = props
  return (
    <button className="btn btn-default px-3 mb-4" onClick={onClick}>
      {isShow ? 'Hide' : 'Show'}
    </button>
  )
}

export default Button
