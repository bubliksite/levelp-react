import React from 'react'
import './style.scss'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import CategoryList from '../CategoryList'

function Header({title}) {
  return (
    <header className="mb-4">
      <h2 className="py-3">{title}</h2>

      <div className="bg-dark">
        <nav className="container nav justify-content-between py-2">
          <NavLink className="nav-link" activeClassName="active" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/homework">
            Homework
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/user">
            User
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/settings">
            Settings
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/profile">
            Profile
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header

CategoryList.propTypes = {
  title: PropTypes.string
}
