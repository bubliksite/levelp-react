import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import Header from './components/Header'
import {HomePage} from './pages'

function App() {
  return (
    <div className="App">
      <Header title="React App" />
      <HomePage />
    </div>
  )
}

export default App
