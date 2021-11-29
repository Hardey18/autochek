import React from "react";
import { Parallax, Background } from "react-parallax";
import styles from '../styles/Parallax.module.css';

import one from '../public/icons/one.jpeg'
import two from '../public/icons/two.jpeg'
import three from '../public/icons/three.jpeg'
import four from '../public/icons/four.jpeg'
import imageLoader from '../imageLoader';

const Paralax = ({ children, bg }: any) => (
  <div className={styles.styles}>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: bg,
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // position: "relative",
          }}
        />
      </Background>
      <div>
        {children}
      </div>
    </Parallax>
    <div className={styles.html} />
  </div>
);

export default Paralax;