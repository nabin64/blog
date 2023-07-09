import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/auther';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import fetcher from '@/lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'

import SwiperCore, { Autoplay } from 'swiper/core';


SwiperCore.use([Autoplay]);

const section1 = () => {
    const { data, isLoading, isError } = fetcher("api/trending")
    if (isLoading) return <Spinner />
    if (isError) return <Error />

    const bg = {
        background: "url('/images/banner.png') no-repeat ",
        backgroundPosition: "right"
    };

    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                >

                    {
                        data.map((value, index) => (
                            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                        ))
                    }


                </Swiper>
            </div>
        </section>
    );
};

function Slide({ data }) {
    const { id, category, img, publidhed, author, title, subtitle } = data;
    return (
        <div className="grid md:grid-cols-2">
            <div className="image mr-20">
                <Link href={`/posts/${id}`}>
                    <Image src={img || "unknown"} width={600} height={600} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className='cat'>
                    <Link href={`/posts/${id}`}>
                        <span className='text-orange-600 hover:text-orange-800'>{category}</span>
                        <span className='text-orange-600 hover:text-orange-800'>-{publidhed}</span>
                    </Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}>
                        <p className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>{title}</p>
                    </Link>
                </div>
                <p className="text-gray-500  py-3">
                    {subtitle}
                </p>
                {author ? <Author {...author} /> : <></>}
            </div>
        </div>
    );
}

export default section1;
