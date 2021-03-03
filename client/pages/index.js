import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {APP_NAME } from '../config';
import FeaturedContainer from '../components/featured/FeaturedContainer'
import Trending from '../components/trending'
import EditorsPick from '../components/editorsPick'
import RecentArticles from '../components/recentArticles'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full py-10'>
        <FeaturedContainer/>
        <Trending/>
        <EditorsPick/>
        <RecentArticles/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
