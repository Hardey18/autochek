import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/FullImage.module.css'
import six from '../public/icons/six.png'
import imageLoader from '../imageLoader'
function FullImage({ page }: any) {
    return (
        <div className={styles.container}>
            <Image
                loader={imageLoader}
                unoptimized
                src={six}
                layout='responsive'
                objectFit='contain'
                alt="Full Image"
            />
            <div className={styles.bottom}>
                <Link href="/">
                    <div>HOME</div>
                </Link>
                <div>|</div>
                <div>{page}</div>
            </div>
        </div>
    )
}

export default FullImage
