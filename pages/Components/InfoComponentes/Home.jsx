import React from 'react'
import Navbar from '../../Common/Navbar'
import Footer from '../../Common/Footer'
import Hero from './Hero'
import InfoSection from './InfoSection'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <InfoSection />
        <Footer />
    </>
  )
}

export default Home