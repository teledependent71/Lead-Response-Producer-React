import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Response Producer</title>
        <meta property="og:title" content="Lead Response Producer" />
      </Helmet>
    </div>
  )
}

export default Home
