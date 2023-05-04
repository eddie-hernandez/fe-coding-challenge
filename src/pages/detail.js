import React from 'react'
import Layout from '../components/Layout'
import { useLocation } from '@reach/router'
import DetailCard from '../components/DetailCard'
import { Link } from 'gatsby'

export default function Detail() {
  const location = useLocation()

  console.log(location)

  const user = location.state.user.detailedData

  console.log(user)

  return (
    <Layout>
      <div className='mb-48'>
        <div>
          <DetailCard userDetails={user} />
        </div>
        <Link to='/'>
          <div className='text-center'>
            <button className='sitebtn sitebtn:hover'>
              Return to GitHub Profile Browser
            </button>
          </div>
        </Link>
      </div>
    </Layout>
  )
}
