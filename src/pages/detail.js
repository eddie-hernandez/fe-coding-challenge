import React from 'react'
import Layout from '../components/Layout'
import {useLocation} from '@reach/router'
import DetailCard from '../components/DetailCard'
import { Link } from 'gatsby'

export default function Detail() {

const location = useLocation()

console.log(location)

  return (
    <div>Detail</div>
  )
}
