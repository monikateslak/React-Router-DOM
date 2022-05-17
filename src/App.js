import React from 'react'
//import { useState, useEffect, useReducer } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Images from './Images'
//import { Link } from 'react-router-dom'
import Navigation from './components/nav'

import About from './About'
import Footer from './Footer'

const Home = () => <Home></Home>
const One = () => <div>One Container</div>
const Two = () => <div>Two Container</div>

function App() {
  //const [enabled, toggle] = useReducer((x) => !x, false);
  //useEffect dokończ TO !!!

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Home></Home>
          <Images></Images>
          <Navigation></Navigation>
          <About></About>
          <Footer></Footer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/one" element={<One />}></Route>
            <Route path="two" element={<Two></Two>}></Route>
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
