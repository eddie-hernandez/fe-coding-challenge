import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
    <div>
      <h2>404</h2>
      <p>Sorry 😔, we couldn’t find what you were looking for.</p>
      <Link to='/'>
        <button>Go To Homepage</button>
      </Link>
    </div>
    </Layout>
  )
}

export const Head = () => <title>Not found</title>
