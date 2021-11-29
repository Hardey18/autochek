import React from 'react'

import styles from '../styles/Footer.module.css'

function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className={styles.container}>
            &copy; {year} Autochek Car Store. All rights reserved | Design by Nurudeen Adewale
        </div>
    )
}

export default Footer
