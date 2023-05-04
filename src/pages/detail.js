import React from 'react'
import Layout from '../components/Layout'
import { useLocation } from '@reach/router'
import DetailCard from '../components/DetailCard'
import { Link } from 'gatsby'

export default function Detail() {
  const location = useLocation()

  console.log(location)

  return (
    <Layout>
      <div className='mb-48'>
        <div>
          <DetailCard userDetails={location.state.user.detailedData} />
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
