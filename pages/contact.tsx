import React from 'react'
import Layout from '../components/Layout'

function Contact() {
    return (
        <div>
            Contact Page
        </div>
    )
}

Contact.getLayout = function getLayout(page: typeof Contact) {
    return <Layout>{page}</Layout>
}

export default Contact
