import Head from 'next/head'
import Image from 'next/image'
import Index from './HomePage/Index'

export default function Home() {
  return (
    <>
      <Head>
        <title>John & Amaka</title>
        <meta name="description" content="We're welcoming you to John and Amaka's wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='moguls-6MYTB7CN'>
       <Index />
      </div> 
    </>
  )
}
