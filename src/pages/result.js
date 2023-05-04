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
        `GET /users/${location.state.name}`,
        {
          username: `${location.state.name}`,
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
      <div>
        <DetailCard userDetails={fetchedData} />
      </div>
    </Layout>
  )
}
