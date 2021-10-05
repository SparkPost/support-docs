import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@sparkpost/matchbox'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SparkPost Support Docs</title>
        <meta name="description" content="parkPost Support Docs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SparkPost Support Docs
        </h1>
        <br />
        <Button variant="filled" color="blue" size="large" to="https://www.sparkpost.com/" external="true">Testing</Button>
      </main>
    </div>
  )
}

export default Home
