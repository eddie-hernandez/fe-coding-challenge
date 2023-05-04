import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <h1>GitBrowse</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/search'>
          Profile Search
        </Link>
      </div>
    </nav>
  )
}
