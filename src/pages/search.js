import React, { useState } from 'react'
import Layout from '../components/Layout'
import { navigate } from 'gatsby'

export default function Search() {
  const [username, setName] = useState('')
  const handleInput = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/result/', { state: { username } })
  }

  return (
    <Layout>
      <div className='flex flex-col justify-center items-center text-center my-10 lg:my-48 2xl:my-72'>
        <div className='mb-6'>
          <h1 className='text-3xl'>Profile Search</h1>
          <h4>
            <i>Is there a GitHub user you're trying to look for?</i>
          </h4>
          <h4>
            <i>Type in a GitHub username to search for someone specific</i>
          </h4>
        </div>
        <form className='flex-col-ctr gap-y-6' onSubmit={handleSubmit}>
          <label>
            Username
            <input
              className='ml-2 p-1 text-black border-black rounded'
              type='text'
              value={username}
              onChange={handleInput}
            />
          </label>
          <button type='submit' className='sitebtn sitebtn:hover'>Search for User</button>
        </form>
      </div>
    </Layout>
  )
}
