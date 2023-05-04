import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import ProfileCard from '../components/ProfileCard'
import { Octokit } from 'octokit'

export default function Home() {
  const [state, setState] = useState({
    loading: true,
    fetchedData: [],
  })

  const octokit = new Octokit({
    auth: `${process.env.GATSBY_TOKEN}`,
  })

  // retrieve api info only once after page renders
  useEffect(() => {
    async function getUsers() {
      const response = await octokit.request('GET /users', {
        per_page: 30,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      setState({
        loading: false,
        fetchedData: response.data,
      })
    }
    getUsers().catch(console.error)
  }, [])

  const { loading, fetchedData } = state

  return (
    <Layout>
      <div>
        {/* loading page if the information is still loading, fetched results if loaded */}
        {loading ? (
          <p className='page-ctr'>Loading...</p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-8 lg:mx-36'>
            {fetchedData.map((user, index) => (
              <ProfileCard user={user} key={index} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export const Head = () => <title>GitBrowse</title>