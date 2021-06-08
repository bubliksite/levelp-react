import React from 'react'
import './style.scss'

function Button(props) {
  const {isShow, onClick} = props
  return (
    <button className="btn btn-default" onClick={onClick}>
      {isShow ? 'Hide' : 'Show'}
    </button>
  )
}

export default Button
