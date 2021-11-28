import React from 'react'
import Image from 'next/image'
import { Parallax } from 'react-parallax';

import styles from '../styles/Parallax.module.css'
import imageLoader from '../imageLoader'
// import image from '../public/icons/four.jpeg'

function ParallaxCom() {
    return (
        <Parallax blur={10} bgImage={<Image />} bgImageAlt="the cat" strength={200}>
            Content goes here. Parallax height grows with content height.
        </Parallax>
    )
}

export default ParallaxCom
