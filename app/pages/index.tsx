import Head from 'next/head'
import HeaderNav from '../components/HeaderNav'
import * as React from 'react'
import Hero from '../components/Hero'
import PageBody from '../components/PageBody'

let str
console.log(str)

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Shortly</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderNav />

      <main>
        <Hero />

        <PageBody />
      </main>
    </div>
  )
}

export default Home
