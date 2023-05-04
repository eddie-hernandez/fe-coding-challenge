import React, {useState, useEffect }from 'react'
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

  // embed in use effect to retrieve api info only once after page renders
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

  console.log(fetchedData)

  return (
    <Layout>
      <div>
        {fetchedData.map((user, index) => (
          <ProfileCard user={user} key={index} />
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <title>GitBrowse</title>
