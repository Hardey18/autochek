import { Carousel } from 'react-carousel-minimal';
// import 'react-carousel-minimal/dist/components/styles/index.css'

import one from '../public/icons/one.jpeg'
import two from '../public/icons/two.jpeg'
import three from '../public/icons/three.jpeg'
import four from '../public/icons/one.jpeg'
// import imageLoader from '../imageLoader';

const data = [
    {
        "image": one,
        "caption": "Sha work first"
    },
    {
        "image": two,
        "caption": "Sha work first"
    },
    {
        "image": three,
        "caption": "Sha work first"
    },
    {
        "image": four,
        "caption": "Sha work first"
    },
];

export default function ImageSlider() {
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
  return (
    <div className="App">
    <div style={{ textAlign: "center" }}>
      <h2>React Carousel Minimal</h2>
      <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
      <div style={{
        padding: "0 20px"
      }}>
        <Carousel
          data={data}
          time={2000}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
    </div>
  </div>
  );
}