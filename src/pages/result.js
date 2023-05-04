import React, { useState, useEffect } from 'react'
import { Octokit } from 'octokit'
import { useLocation } from '@reach/router'
import Layout from '../components/Layout'
import DetailCard from '../components/DetailCard'
import { Link } from 'gatsby'

export default function Result() {
  const location = useLocation()

  const [state, setState] = useState({
    loading: true,
    fetchedData: [],
  })

  const octokit = new Octokit({
    auth: `${process.env.GATSBY_TOKEN}`,
  })

  useEffect(() => {
    async function getUser() {
      const response = await octokit.request(
        `GET /users/${location.state.username}`,
        {
          username: `${location.state.username}`,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      )
      setState({
        loading: false,
        fetchedData: response.data,
      })
    }
    getUser().catch((error) => {
      console.error(error)
      setState({
        loading: false,
        fetchedData: null,
      })
    })
  }, [])

  const { loading, fetchedData } = state

  return (
    <Layout>
      <div className='mb-48'>
        {/* loading page if the information is still loading, fetched results if loaded */}
        {loading ? (
          <p className='page-ctr'>Loading...</p>
        ) : fetchedData === null ? (
          <div className='mt-36 p-6 text-center md:page-ctr'>
            <h3 className=' text-lg font-bold text-orange-300'>woah there, pardner! looks like there's no GitHub user with that username!</h3>
            <h3>give another search and try again.</h3>
          </div>
        ) : (
          <DetailCard userDetails={fetchedData} />
        )}
            <Link to='/search'>
              <div className='text-center mb-36'>
              <button className='sitebtn'>Back to Search</button>
              </div>
            </Link>
      </div>
    </Layout>
  )
}
