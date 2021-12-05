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
        <script 
          async
          type="text/javascript"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
        >
        </script>
      </Head>

      <Home/>
    </Layout>
  )
}

export default HomePage
