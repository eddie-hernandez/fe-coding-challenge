import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav className='bg-slate-500 p-5 border-b flex justify-between items-center sticky top-0'>
      <Link className='link' to='/'>
        <h1 className='text-xl'>GitBrowse</h1>
      </Link>
      <div>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link ml-2' to='/search'>
          Profile Search
        </Link>
      </div>
    </nav>
  )
}
