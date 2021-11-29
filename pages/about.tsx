import React from 'react'
import CategorySection from '../components/CategorySection'
import FullImage from '../components/FullImage'
import Layout from '../components/Layout'
import ShippingSection from '../components/ShippingSection'

function About() {
    return (
        <div>
            <FullImage page="ABOUT US" />
            <ShippingSection />
            <CategorySection />
        </div>
    )
}

About.getLayout = function getLayout(page: typeof About) {
    return <Layout>{page}</Layout>
}

export default About
