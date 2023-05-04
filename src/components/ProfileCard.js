import React, { useState, useEffect } from 'react'
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
    <div
      key={user.id}
      className='card flex flex-col justify-evenly items-center text-center mt-8 m-2 p-6'
    >
      <Link to='/detail' state={{ user: { detailedData } }}>
        <div>
          <img
            src={user.avatar_url}
            className='w-48 rounded-full border-4 border-stone-800'
            alt='user-avatar'
          />
        </div>
      </Link>
      <div>
        <h1 className='text-2xl font-bold'>
          {detailedData.name === null ? detailedData.login : detailedData.name}
        </h1>
        <h4 className='text-gray-900 italic underline'>@{user.login}</h4>
      </div>
      <Link to='/detail' state={{ user: { detailedData } }}>
        <button className='sitebtn sitebtn:hover'>View Profile</button>
      </Link>
    </div>
  )
}