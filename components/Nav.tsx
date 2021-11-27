import React from 'react'
import Image from 'next/image'
import { FaShoppingCart, FaTruckMoving } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import { HiOutlineLogin } from 'react-icons/hi'
import { FaCartArrowDown } from 'react-icons/fa'

import styles from '../styles/Nav.module.css'
import logo from '../public/icons/logo2.png'
import imageLoader from '../imageLoader'

function Nav() {
    return (<>
        <div className={styles.container}>
            <div className={styles.textIconContainerLeft}>
                <div>Offer Zone Deal and Discount</div>
                <FaShoppingCart />
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.textIconContainer}>
                    <MdLocationOn />
                    <div>Select Location</div>
                </div> |
                <div className={styles.textIconContainer}>
                    <FaTruckMoving />
                    <div>Track Order</div>
                </div> |
                <div className={styles.textIconContainer}>
                    <IoMdCall />
                    <div>001 234 5678</div>
                </div> |
                <div className={styles.textIconContainer}>
                    <HiOutlineLogin />
                    <div>Login</div>
                </div> |
                <div className={styles.textIconContainer}>
                    <HiOutlineLogin />
                    <div>Register</div>
                </div>
            </div>
        </div>

        <div className={styles.bottomSection}>
            <Image
                loader={imageLoader}
                unoptimized
                src={logo}
                alt="Logo"
                width="150"
                height="150"
            />
            <div className={styles.inputContainer}>
                <div className={styles.inputContainerInner}>
                    <input type="text" placeholder="Search" />
                    <button type="submit">Search</button>
                </div>
                <div className={styles.cart}>
                    <FaCartArrowDown size={22} color="#fff" />
                </div>
            </div>
        </div>
    </>)
}

export default Nav
