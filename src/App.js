import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Route, Routes } from 'react-router-dom'
import { Router } from 'react-router-dom'
//import { SwitchBaseProps } from '@material-ui/core/internal/SwitchBase'
import logo from './logo.svg'
import './App.css'
import About from './About'
import Footer from './Footer'
//import DisplayEmojis from './DisplayEmojiName'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          element{}
          render = {(props) => <></>}
          <Routes>
            <Router path="about" element={About}></Router>
          </Routes>
        </Route>
      </Routes>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Footer></Footer>
        </header>
      </div>
    </>
  )
}

export default App
