import Head from 'next/head'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'U-Events | Find the hottest events',
  description: 'Find the latest events',
  keywords: 'events, music, sports, gaming',
}
