import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import { Octokit } from 'octokit'

export default function ProfileCard({ user }) {

  // accessing full names from "get a [individual] user" API
  // not available on index users API

  const [userData, setUserData] = useState({
    detailedData: [],
  })

  const octokit = new Octokit({
    auth: `${process.env.GATSBY_TOKEN}`,
  })

  useEffect(() => {
    async function getUser() {
      const response = await octokit.request(`GET /users/${user.login}`, {
        username: `${user.login}`,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      })
      setUserData({
        detailedData: response.data,
      })
    }
    getUser().catch(console.error)
  }, [])

  const { detailedData } = userData

  return (
    <div>
      <h1>{user.login}</h1>
      <h4>{user.login}</h4>
      <Link to='/detail' state={{ user: { detailedData } }}>
        <button>View Profile</button>
      </Link>
    </div>
  )
}