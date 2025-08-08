import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Shortener from './Shortener'
import Advanced from './Advanced'

const Landing = () => {
  return (
    <div>
        <Nav/>  
        {/* <Advanced/> */}
        <Shortener/>
        <Footer/>
    </div>
  )
}

export default Landing