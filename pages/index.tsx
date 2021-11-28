import { Box } from '@chakra-ui/layout'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import Nav from '../components/Nav'
import Parallax from '../components/Parallax'
import imageLoader from '../imageLoader'
import styles from '../styles/Home.module.css'
import { GetAllCarsResults, GetCars, GetPopularMakesResults, MakeList } from '../types'
import { baseUrl } from '../utils/baseUrl'
import { FaChevronRight } from 'react-icons/fa'
import ShippingSection from '../components/ShippingSection'
import CategorySection from '../components/CategorySection'
const Home: NextPage<{ popularMakes: MakeList[], allCars: GetCars[] }> = ({ popularMakes, allCars }) => {
  console.log(popularMakes)
  return (
    <div className={styles.container}>
      <Head>
            <title>Chek Car App</title>
            <meta name="description" content="Chek car app content" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Nav />
      {/* <Box maxWidth='1000px' margin='auto' p='4'>
        <ImageSlider />
      </Box> */}
      <Parallax />
      <h1 className={styles.productHeader}><span className={styles.eachChar}>O</span>ur <span className={styles.eachChar}>P</span>roducts - <span className={styles.eachChar}>C</span>ars</h1>
      <div className={styles.mainBrand}>
        <div className={styles.carSection}>
          {allCars.map((result: any) => (
            <div key={result.id} className={styles.carsContainer}>
              <Image
                loader={imageLoader}
                unoptimized
                className={styles.featuredImage}
                src={result.imageUrl ? result.imageUrl : "https://th.bing.com/th/id/OIP.El6pwGNKtZphJAZy8F5uqQHaEK?pid=ImgDet&rs=1"} 
                alt={result.title} 
                width="200"
                height="200"
              />
              <a>
                <h3>{result.title}</h3>
              </a>
              <h3>{result.year}</h3>
              <Link href={`/cars/${result.id}`}>
                <a>
                  <h3 className={styles.viewDetails}>VIEW DETAILS</h3>
                </a>
              </Link>
            </div>))}
          </div>
          <div className={styles.priceSection}>
            <h2>Search Here</h2>
            <div className={styles.productSearch}>
              <input type="text" placeholder="Product name..." />
              <div><FaChevronRight color="#fff" size={20} /></div>
            </div>
            <h2>Price</h2>
            <div className={styles.underPrice}>
              <p>Under $1,000</p>
              <p>$1,000 - $5,000</p>
              <p>$5,000 - $10,000</p>
              <p>$10,000 - $20,000</p>
              <p>$20,000 $30,000</p>
              <p>Over $30,000</p>
            </div>
            <h2>Discount</h2>
            <form className={styles.form}>
              <input type="checkbox" id="first" name="first" />
              <label className={styles.checkLabel} 
              htmlFor="first">5% or More</label>
              <div className={styles.separator}></div>
              <input type="checkbox" id="second" name="second" />
              <label className={styles.checkLabel} htmlFor="second">10% or More</label>
              <div className={styles.separator}></div>
              <input type="checkbox" id="third" name="third" />
              <label className={styles.checkLabel} htmlFor="third">20% or More</label>
              <div className={styles.separator}></div>
              <input type="checkbox" id="fourth" name="fourth" />
              <label className={styles.checkLabel} htmlFor="fourth">30% or More</label>
              <div className={styles.separator}></div>
              <input type="checkbox" id="fifth" name="fifth" />
              <label className={styles.checkLabel} htmlFor="fifth">50% or More</label>
              <div className={styles.separator}></div>
              <input type="checkbox" id="sixth" name="sixth" />
              <label className={styles.checkLabel} htmlFor="sixth">60% or More</label>
              <div className={styles.separator}></div>
            </form>

            <h2>Models</h2>
            <form className={styles.form}>
              {popularMakes.map((result) => (<>
                <input type="checkbox" id={result.name} name={result.name} />
                <label className={styles.checkLabel} 
                htmlFor="first">{result.name}</label>
                <div className={styles.separator}></div>
              </>))}
            </form>

            <h2>Discount</h2>
            <form className={styles.form}>
              <input type="checkbox" id="first" name="first" />
              <label className={styles.checkLabel} 
              htmlFor="first">Eligible for Cash On Delivery</label>
              <div className={styles.separator}></div>
            </form>

            <h2>New Arrivals</h2>
            <form className={styles.form}>
              <input type="checkbox" id="first" name="first" />
              <label className={styles.checkLabel} 
              htmlFor="first">Last 30 Days</label>
              <div className={styles.separator}></div>
              <input type="checkbox" id="first" name="first" />
              <label className={styles.checkLabel} 
              htmlFor="first">Last 90 Days</label>
              <div className={styles.separator}></div>
            </form>
          </div>
      </div>
      <ShippingSection />
      <CategorySection />
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const popularMakesRes = await fetch(`${baseUrl}/make?popular=true`);
  // console.log("Testing")
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

<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Lato;
  }

  * {
    box-sizing: border-box;
  }
`}</style>

export default Home
