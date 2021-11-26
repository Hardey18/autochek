import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import imageLoader from '../imageLoader'
import styles from '../styles/Home.module.css'
import { GetAllCarsResults, GetCars, GetPopularMakesResults, MakeList } from '../types'
import { baseUrl } from '../utils/baseUrl'

const Home: NextPage<{ popularMakes: MakeList[], allCars: GetCars[] }> = ({ popularMakes, allCars }) => {
  return (
    <div className={styles.container}>
      {allCars.map((result: any) => (
        <div key={result.id}>
          <Link href={`/cars/${result.id}`}>
            <a>
              <h3>{result.title}</h3>
            </a>
          </Link>
          <Image
            loader={imageLoader}
            unoptimized
            src={result.imageUrl ? result.imageUrl : "https://th.bing.com/th/id/OIP.El6pwGNKtZphJAZy8F5uqQHaEK?pid=ImgDet&rs=1"} 
            alt={result.title} 
            width="200"
            height="200"
          />
        </div>
      ))}
    </div>
  )
}

// Home.getLayout = function getLayout(page: typeof Home) {
//   return <Layout>{page}</Layout>
// }

export const getStaticProps: GetStaticProps = async (context) => {
  const popularMakesRes = await fetch(`${baseUrl}/make?popular=true`);
  const allCarsRes = await fetch(`${baseUrl}/car/search`)

  const result: GetPopularMakesResults = await popularMakesRes.json();
  const allCarsResult: GetAllCarsResults = await allCarsRes.json();

  return {
    props: {
      popularMakes: result.makeList,
      allCars: allCarsResult.result
    }
  }
}

export default Home

// const Home: NextPage<{popularMakes: MakeList[]}> = ({ popularMakes, allCars })