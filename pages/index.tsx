import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({ popularMakes }: any) => {
  // console.log("Result", popularMakes);
  return (
    <div className={styles.container}>
      <h1>Hey Cheecki</h1>
      {JSON.stringify(popularMakes)}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.staging.myautochek.com/v1/inventory/make?popular=true");

  const result = await res.json();

  return {
    props: {
      popularMakes: result
    }
  }
}

export default Home
