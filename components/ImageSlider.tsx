import React, { useState, useCallback } from "react";
import Image from 'next/image'
import ReactSwipe from 'react-swipe';

import styles from '../styles/ImageSlider.module.css'
import one from '../public/icons/one.jpeg'
import two from '../public/icons/two.jpeg'
import three from '../public/icons/three.jpeg'
import four from '../public/icons/four.jpeg'
import imageLoader from '../imageLoader';

export default function ImageSlider() {
  let reactSwipeEl: any;
  return (
    <>
      <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <Image 
            src={four}
            alt="Carousel"
            unoptimized
            width={1600}
            height={600}
            loader={imageLoader}
          />
        </div>
        <div>
          <Image 
            src={three}
            alt="Carousel"
            unoptimized
            width={1600}
            height={600}
            loader={imageLoader}
          />
        </div>
        <div>
          <Image 
            src={one}
            alt="Carousel"
            unoptimized
            width={1600}
            height={600}
            loader={imageLoader}
          />
        </div>
        <div>
          <Image 
            src={two}
            alt="Carousel"
            unoptimized
            width={1600}
            height={600}
            loader={imageLoader}
          />
        </div>
      </ReactSwipe>
      <div className={styles.button}>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
      </div>
    </div>
    </>
  );
};