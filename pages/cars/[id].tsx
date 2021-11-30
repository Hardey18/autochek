import React from 'react'
import Head from "next/head"
import Image from 'next/image'
import imageLoader from '../../imageLoader'
import { GetServerSideProps } from 'next'
import { baseUrl } from '../../utils/baseUrl'
import Layout from '../../components/Layout'
import ShippingSection from '../../components/ShippingSection'
import CategorySection from '../../components/CategorySection'

function CarDetailsPage({ car, media }: any) {
    console.log(car)
    return (<>
        <Head>
            <title>{car.carName}</title>
            <meta name="description" content={car.carName} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Car Details Page</h1>
        <div>{car.carName}</div>
        <Image 
            loader={imageLoader}
            unoptimized
            src={car.imageUrl ? car.imageUrl : "https://th.bing.com/th/id/OIP.El6pwGNKtZphJAZy8F5uqQHaEK?pid=ImgDet&rs=1"}
            alt={car.carName}
            width="200"
            height="200"
            />
            <div>{car.engineType}</div>
            <div>{car.exteriorColor}</div>
            <div>{car.fuelType}</div>
            <div>{car.year}</div>
        <h3>Car Medias</h3>
        {media.map((result: any) => (
            <Image
            key={result.id}
            loader={imageLoader}
            unoptimized
            src={result.url}
            width="200"
            height="200"
            alt="Car Media"
        />
        ))}
        <ShippingSection />
        <CategorySection />
    </>)
}

CarDetailsPage.getLayout = function getLayout(page: typeof CarDetailsPage) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const carDetailsRes = await fetch(`${baseUrl}/car/${context.query.id}`);
    const carMedia = await fetch(`${baseUrl}/car_media?carId=${context.query.id}`);

    const car = await carDetailsRes.json();
    const media = await carMedia.json();

    return {
        props: {
            car,
            media: media.carMediaList
        }
    }
}

export default CarDetailsPage;
