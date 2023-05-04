import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className='content'>{children}</div>
      <footer>
        <h4>Copyright &#169; 2023 Eddie Hernandez</h4>
      </footer>
    </div>
  )
}
