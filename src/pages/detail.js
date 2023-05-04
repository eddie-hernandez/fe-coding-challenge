import React from 'react'
import Layout from '../components/Layout'
import {useLocation} from '@reach/router'
import DetailCard from '../components/DetailCard'
import { Link } from 'gatsby'

export default function Detail() {

const location = useLocation()

console.log(location)

const user = location.state.user.detailedData

console.log(user)

  return (
    <div>
      <DetailCard userDetails={user} />
    </div>
  )
}
