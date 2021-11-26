import React from 'react'
import Image from 'next/image'
import imageLoader from '../../imageLoader'
import { GetStaticProps } from 'next'

function CarDetailsPage({ car }: any) {
    return (<>
        <h1>Car Details Page</h1>
        <div>{car.carName}</div>
        <Image 
            loader={imageLoader}
            unoptimized
            src={car.imageUrl}
            alt={car.carName}
            width="200"
            height="200"
        />
    </>)
}

export async function getStaticPaths () {
    const getCars: any = await fetch("https://api.staging.myautochek.com/v1/inventory/car/search")

    const result = await getCars.json()
  
    return {
      paths: result.result.map((car: any) => {
          return { params: { id: String(car.id) } }
      }),
      fallback: false
    }
  }

export async function getStaticProps({ params }: { params: { id: string } }) {
    const carDetailsRes = await fetch(`https://api.staging.myautochek.com/v1/inventory/car/${params.id}`);

    const car = await carDetailsRes.json();

    return {
        props: {
            car
        }
    }
}

export default CarDetailsPage;
