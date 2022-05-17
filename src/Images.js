import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Images() {
  useEffect(() => {
    GetItems()
  }, [])
  const [items, setItems] = useState([])
  const GetItems = async () => {
    const Response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/',
    ).then((Response) => Response.json())

    setItems(Response)

    useEffect(() => {
      GetItems()
    }, [])
  }

  return (
    <div className="images-container">
      {items && items.map((item) =>)}
      <Router>
        <div className="one">
          <Link to="/one">One</Link>
        </div>
        <div className="two">
          <Link to="/two"> Two</Link>
        </div>
        <div className="three">
          <Link to="/three">Three</Link>
        </div>
      </Router>
    </div>
  )
}
export default Images
