import type { NextPage } from 'next'
import Head from 'next/head'
import Home from '../components/Home'
import Layout from '../components/Layout'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>EPYG - Every place you go</title>
        <meta name="description" content="EPYG - Every place you go" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home/>
    </Layout>
  )
}

export default HomePage
