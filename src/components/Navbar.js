import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav className='bg-slate-500 p-5 border-b flex justify-between items-center sticky top-0'>
      <h1 className='text-xl'>GitBrowse</h1>
      <div className='links text-md'>
        <Link to='/'>Home</Link>
        <Link to='/search' className='ml-2'>
          Profile Search
        </Link>
      </div>
    </nav>
  )
}
