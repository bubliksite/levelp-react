import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import User from '../components/User'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Settings from '../components/Settings'
import Error404 from '../components/404'
import FetchTasklist from '../components/FetchTasklist'
import TodoList from '../components/TodoList'

export const HomePage = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fetchtasklist" component={FetchTasklist} />
      <Route path="/todolist" component={TodoList} />
      <Route path="/user" component={User} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} />
      <Route path="/404" component={Error404} />
      <Redirect to="/404" />
    </Switch>
  )
}
