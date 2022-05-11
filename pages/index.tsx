import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// components
import Navbar from '../componets/Navbar/Navbar.compoent'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Home
