import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <title>Home</title>
        <meta name='description' content='Home page' />
        <h1>Home</h1>
        <Link href='/about'> About</Link>
      </Layout>
    </div>
  )
}
