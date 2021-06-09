import React from 'react'
import './style.scss'
import {NavLink} from 'react-router-dom'

function Header(props) {
  const {title} = props
  return (
    <header>
      <h2>{title}</h2>
      <nav>
        <div className="container">
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/fetchtasklist">
            Fetch Task List
          </NavLink>
          <NavLink activeClassName="active" to="/todolist">
            To do List
          </NavLink>
          <NavLink activeClassName="active" to="/user">
            User
          </NavLink>
          <NavLink activeClassName="active" to="/settings">
            Settings
          </NavLink>
          <NavLink activeClassName="active" to="/profile">
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
