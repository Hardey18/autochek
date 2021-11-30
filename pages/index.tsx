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
  allCars.shift();
  // console.log("all", newCars)
  return (
    <div className={styles.container}>
      <Head>
            <title>Chek Car App</title>
            <meta name="description" content="Chek car app content" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Nav />
      <ImageSlider />
      <h1 className={styles.productHeader}><span className={styles.eachChar}>O</span>ur <span className={styles.eachChar}>P</span>roducts - <span className={styles.eachChar}>C</span>ars</h1>
      <div className={styles.mainBrand}>
        <div className={styles.carSection}>
          Hello there
          {/* {allCars.map((result: any) => (
            <div key={result.id} className={styles.carsContainer}>
              <Image
                loader={imageLoader}
                unoptimized
                className={styles.featuredImage}
                src={result.imageUrl ? result.imageUrl : "https://th.bing.com/th/id/OIP.El6pwGNKtZphJAZy8F5uqQHaEK?pid=ImgDet&rs=1"} 
                alt="Cars"
                width="200"
                height="200"
              />
              <a>
                <h3>{result.title.length > 15 ? `${result.title.substring(0, 18)}...` : result.title}</h3>
              </a>
              <h3>{result.year}</h3>
              <Link href={`/cars/${result.id}`}>
                <a>
                  <h3 className={styles.viewDetails}>VIEW DETAILS</h3>
                </a>
              </Link>
            </div>))} */}
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
              <input type="checkbox" id="first-here" name="first-here" />
              <label className={styles.checkLabel} 
              htmlFor="first-here">5% or More</label>
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
              {popularMakes.map((result) => (<div key={result.name}>
                <input type="checkbox" id="first-next" name={result.name} />
                <label className={styles.checkLabel} 
                htmlFor="first-next">{result.name}</label>
                <div className={styles.separator}></div>
              </div>))}
            </form>

            <h2>Discount</h2>
            <form className={styles.form}>
              <input type="checkbox" id="first-last" name="first-last" />
              <label className={styles.checkLabel} 
              htmlFor="first-last">Eligible for Cash On Delivery</label>
              <div className={styles.separator}></div>
            </form>

            <h2>New Arrivals</h2>
            <form className={styles.form}>
              <input type="checkbox" id="first-end" name="first-end" />
              <label className={styles.checkLabel} 
              htmlFor="first-end">Last 30 Days</label>
              <div className={styles.separator}></div>
              <input type="checkbox" id="first" name="first" />
              <label className={styles.checkLabel} 
              htmlFor="first">Last 90 Days</label>
              <div className={styles.separator}></div>
            </form>
          </div>
      </div>
      <Parallax bg="url('https://images.hgmsites.net/lrg/2018-acura-nsx_100618872_l.jpg')">
        <div className={styles.parallax}>
          <div>
            <h3>Smooth, Rich & Loud Audio</h3>
            <h1>Branded Headphones</h1>
            <h4>Sale up to 25% off all in store</h4>
          </div>
          <div>
            <h3>A Bigger Phone</h3>
            <h1>Smart Phones 5</h1>
            <h4>Free shipping order over $100</h4>
          </div>
        </div>
      </Parallax>
      <ShippingSection />
      <CategorySection />
      <Footer />
    </div>
  )
}

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
