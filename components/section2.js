import React from 'react'
import Author from './_child/auther'
import Link from 'next/link'
import Image from 'next/image'
import fetcher from '@/lib/fetcher'
import Spinner from './_child/spinner'
import Error from './_child/error'

const section2 = () => {

    const { data, isLoading, isError } = fetcher("api/posts")

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <Error />
    }


    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>  Latest Posts</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>

                {
                    data.map((value, index) => (
                        <Post data={value} key={index} />
                    ))
                }


            </div>


        </section>
    )
}


function Post({ data }) {
    const { id, category, img, publidhed, author, title } = data;
    return (
        <div className='item'>
            <div className='images'>
                <Link href={`/posts/${id}`}>
                    <Image src={img || "/"} width={500} height={350} className="rouneded" />
                </Link>

            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={`/posts/${id}`}>
                        <span className='text-orange-600 hover:text-orange-800'>{category
                            || "Unknown"}</span>
                        <span className='text-orange-600 hover:text-orange-800'>-{publidhed || "Unknown"}</span>
                    </Link>
                </div>
                <div className='title'>
                    <Link href={`/posts/${id}`}>
                        <p className='text-xl font-bold text-gray-800 hover:text-gray-600'>{title || "unknown"}</p>
                    </Link>
                </div>
                <p className="text-gray-500  py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day, however, a small line of blind
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>

                {author ? <Author {...author} /> : <></>}


            </div>
        </div>
    )
}



export default section2