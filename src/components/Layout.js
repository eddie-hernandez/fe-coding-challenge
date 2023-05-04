import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className='layout font-body min-h-screen min-w-full text-gray-200'>
      <Navbar />
      <div className='content'>{children}</div>
      <footer className='relative bottom-0 text-slate-300 text-center m-10'>
        <h4 className='text-secondary-100'>
          Copyright &#169; 2023 Eddie Hernandez
        </h4>
      </footer>
    </div>
  )
}
