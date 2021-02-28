import Head from 'next/head'
import HeaderNav from '../components/page-sections/HeaderNav'
import React from 'react'
import Hero from '../components/page-sections/Hero'
import PageBody from '../components/page-sections/PageBody'
import BoostSection from '../components/page-sections/BoostSection'
import Footer from '../components/page-sections/Footer'

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

        <BoostSection />

        <Footer />
      </main>
    </div>
  )
}

export default Home
