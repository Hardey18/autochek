import React from 'react'
import Image from 'next/image'
import imageLoader from '../../imageLoader'
import { GetServerSideProps } from 'next'
import { baseUrl } from '../../utils/baseUrl'
import Layout from '../../components/Layout'

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

CarDetailsPage.getLayout = function getLayout(page: typeof CarDetailsPage) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const carDetailsRes = await fetch(`${baseUrl}/car/${context.query.id}`);

    const car = await carDetailsRes.json();

    return {
        props: {
            car
        }
    }
}

export default CarDetailsPage;
