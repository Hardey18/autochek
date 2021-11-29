import React from 'react'
import CategorySection from '../components/CategorySection'
import FullImage from '../components/FullImage'
import Layout from '../components/Layout'
import ShippingSection from '../components/ShippingSection'

import styles from '../styles/Contact.module.css'

function Contact() {
    return (
        <div>
            <FullImage page="CONTACT US" />
            <h1 className={styles.productHeader}><span className={styles.eachChar}>C</span>ontact <span className={styles.eachChar}>U</span>s</h1>
            <ShippingSection />
            <CategorySection />
        </div>
    )
}

Contact.getLayout = function getLayout(page: typeof Contact) {
    return <Layout>{page}</Layout>
}

export default Contact
