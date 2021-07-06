import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import React from 'react'
import Header from './components/Header'
import {HomePage} from './pages'
import Modals from './components/Modals'

function App() {
  return (
    <div className="App">
      <Header title="React App" />
      <HomePage />
      <Modals />
    </div>
  )
}

export default App
