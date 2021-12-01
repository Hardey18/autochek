import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import { IoMdMail } from 'react-icons/io'

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
            <div className={styles.topSection}>
                <div>
                    <div className={styles.iconContainer}>
                        <MdLocationOn color="#F45C81" size={30} />
                    </div>
                    <h2>Address</h2>
                    <p>1PO Box 8568954 Melbourne</p>
                    <p>Australia.</p>
                </div>
                <div>
                    <div className={styles.iconContainer}>
                        <IoMdCall color="#F45C81" size={30} />
                    </div>
                    <h2>Call Us</h2>
                    <p>+(0121) 121 121</p>
                    <p>+(0121) 121 122</p>
                </div>
                <div>
                    <div className={styles.iconContainer}>
                        <IoMdMail color="#F45C81" size={30} />
                    </div>
                    <h2>Email</h2>
                    <p>info@example1.com</p>
                    <p>info@example2.com</p>
                </div>
            </div>
            <div className={styles.topInput}>
                <div>
                    <label htmlFor="">Name</label>
                    <input className={styles.input} type="text" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input className={styles.input} type="email" placeholder="Email" />
                </div>
            </div>
            <div className={styles.textAreaContainer}>
                <textarea className={styles.textArea} name="Message" id="message" placeholder="Message"></textarea>
            </div>
            <ShippingSection />
            <CategorySection />
        </div>
    )
}

Contact.getLayout = function getLayout(page: typeof Contact) {
    return <Layout>{page}</Layout>
}

export default Contact
