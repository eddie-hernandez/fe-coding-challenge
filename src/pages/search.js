import React, { useState } from 'react'
import Layout from '../components/Layout'
import { navigate } from 'gatsby'

export default function Search() {
  const [name, setName] = useState('')
  const handleInput = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    navigate('/result/', { state: { name } })
  }

  return (
    <Layout>
      <div>
        <div>
          <h1>Profile Search</h1>
          <h4>
            <i>Is there a GitHub user you're trying to look for?</i>
          </h4>
          <h4>
            <i>Type in a GitHub username to search for someone specific</i>
          </h4>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type='text' value={name} onChange={handleInput} />
          </label>
          <button type='submit'>Search for User</button>
        </form>
      </div>
    </Layout>
  )
}
