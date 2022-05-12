import React from 'react'
//import { useState, useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
//import { Link } from 'react-router-dom'
import Navigation from './components/nav'
import About from './About'
import Footer from './Footer'

const Home = () => <Home></Home>

function App() {
  //const [enabled, toggle] = useReducer((x) => !x, false);
  //useEffect dokończ TO !!!

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Home></Home>
          <Navigation></Navigation>
          <About></About>
          <Footer></Footer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nav" element={<Navigation />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/footer" element={<Footer />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
