import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">

      <h2 className="logo">grimmory</h2>

      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/tribute">Tribute</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
