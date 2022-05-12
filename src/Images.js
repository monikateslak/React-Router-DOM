import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Images() {
  return (
    <div className="images-container">
      <Router>
        <div className="one">
          <Link to="/one">One Container</Link>
        </div>
        <div className="two">
          <Link to="/two"> Two Container</Link>
        </div>
        <div className="three">
          <Link to="/three">Three Container </Link>
        </div>
      </Router>
    </div>
  )
}
export default Images
