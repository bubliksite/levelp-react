import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import User from '../components/User'
import Home from '../components/Home'
import Profile from '../components/Profile'
import Settings from '../components/Settings'
import Error404 from '../components/404'
import TaskContainer from '../container/TaskContainer'
import Homework from '../components/Homework'

export const HomePage = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/homework" component={Homework} />
      <Route path="/todolist" component={TaskContainer} />
      <Route path="/user" component={User} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} />
      <Route path="/404" component={Error404} />
      <Redirect to="/404" />
    </Switch>
  )
}
