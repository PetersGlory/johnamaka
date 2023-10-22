import React from 'react'
import Head from 'next/head'
import Home from './Components/RsvpComponents/Home'

export default function RSVP() {
    return (
      <>
        <Head>
            <title>John & Amaka</title>
            <meta name="description" content="We're welcoming you to John and Amaka's wedding" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='moguls-6MYTB7CN'>
         <Home />
        </div> 
      </>
    )
  }