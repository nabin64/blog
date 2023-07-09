
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import Author from './_child/auther';
import fetcher from '@/lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'

const section3 = () => {
    const { data, isLoading, isError } = fetcher("api/popular")
    if (isLoading) return <Spinner />
    if (isError) return <Error />
    return (
        <section className="container mx-auto md:px-20 py-16">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

            {/* swiper */}
            <Swiper
                slidesPerView={2}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }

                }}
            >
                {data.map((value, index) => (
                    <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}


function Post({ data }) {
    const { id, category, img, publidhed, author, title, subtitle } = data;
    return (
        <div className="grid gap-4">
            <div className="images">
                <Link href={`/posts/${id}`}>
                    <Image src={img} width={600} height={400} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat mb-2">
                    <Link href={`/posts/${id}`}>
                        <p className="text-orange-600 hover:text-orange-800">{category}</p>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <p className="text-gray-800 hover:text-gray-600">- {publidhed}</p>
                    </Link>
                </div>
                <div className="title mb-4">
                    <Link href={`/posts/${id}`}>
                        <p className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title}</p>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                    {subtitle}
                </p>
                {author ? <Author {...author} /> : <></>}
            </div>
        </div>
    );
}


export default section3
