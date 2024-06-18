import React from 'react'
import Sidenav from '../components/Sidenav'
import Topnav from '../components/Topnav'

const Home = () => {
    document.title = "Movie Matrix | HomePage"
  return (
    <>
    <Sidenav />
    <div className='w-[80%] h-full'>
        <Topnav />
    </div>
    </>
  )
}

export default Home