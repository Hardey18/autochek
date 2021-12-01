import React from 'react'
import Image from 'next/image'

import CategorySection from '../components/CategorySection'
import FullImage from '../components/FullImage'
import Layout from '../components/Layout'
import Paralax from '../components/Parallax'
import ShippingSection from '../components/ShippingSection'
import styles from '../styles/About.module.css'
import user from '../public/icons/user.jpeg'
import ab from '../public/icons/ab.jpeg'
import imageLoader from '../imageLoader'

function About() {
    return (
        <div>
            <FullImage page="ABOUT US" />
            <h1 className={styles.productHeader}><span className={styles.eachChar}>A</span>bout <span className={styles.eachChar}>U</span>s</h1>
            <div className={styles.welcome}>
                <div>
                    <h1>Welcome</h1>
                    <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros sagittis, quis hendrerit libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque.</p>
                </div>
                <div>
                    <Image
                        loader={imageLoader}
                        unoptimized
                        className={styles.topImage}
                        src={ab}
                        alt="Cars"
                        width="500"
                        height="300"
                    />
                </div>
            </div>
            <Paralax bg="url('https://th.bing.com/th/id/OIP.El6pwGNKtZphJAZy8F5uqQHaEK?pid=ImgDet&rs=1')">
                <div className={styles.container}>
                    <h1 className={styles.productHeader}><span className={styles.eachChar}>O</span>ur <span className={styles.eachChar}>C</span>ustomers <span className={styles.eachChar}>S</span>ays</h1>
                    <div className={styles.articleContainer}>
                        <div>
                            <div className={styles.text}>
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className={styles.bottomText}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        loader={imageLoader}
                                        unoptimized
                                        className={styles.user}
                                        src={user}
                                        alt="Cars"
                                        width="50"
                                        height="50"
                                    />
                                </div>
                                <div>
                                    <h2>Tyson</h2>
                                    <h4>fames ac turpis</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.text}>
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className={styles.bottomText}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        loader={imageLoader}
                                        unoptimized
                                        className={styles.user}
                                        src={user}
                                        alt="Cars"
                                        width="50"
                                        height="50"
                                    />
                                </div>
                                <div>
                                    <h2>Tyson</h2>
                                    <h4>fames ac turpis</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.articleContainer}>
                        <div>
                            <div className={styles.text}>
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className={styles.bottomText}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        loader={imageLoader}
                                        unoptimized
                                        className={styles.user}
                                        src={user}
                                        alt="Cars"
                                        width="50"
                                        height="50"
                                    />
                                </div>
                                <div>
                                    <h2>Tyson</h2>
                                    <h4>fames ac turpis</h4>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.text}>
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className={styles.bottomText}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        loader={imageLoader}
                                        unoptimized
                                        className={styles.user}
                                        src={user}
                                        alt="Cars"
                                        width="50"
                                        height="50"
                                    />
                                </div>
                                <div>
                                    <h2>Tyson</h2>
                                    <h4>fames ac turpis</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Paralax>
            <ShippingSection />
            <CategorySection />
        </div>
    )
}

About.getLayout = function getLayout(page: typeof About) {
    return <Layout>{page}</Layout>
}

export default About
