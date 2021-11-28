import React from 'react'
import Layout from '../components/Layout'

function About() {
    return (
        <div>
            About Page
        </div>
    )
}

About.getLayout = function getLayout(page: typeof About) {
    return <Layout>{page}</Layout>
}

export default About
