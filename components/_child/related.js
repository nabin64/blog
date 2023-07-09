import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Author from './auther'
const related = () => {
    return (
        <section className='pt-20 '>


            <h1 className='font-bold text-3xl py-10'>Related</h1>
            <div className='flex flex-col gap-10'>


                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}

            </div>


        </section>
    )
}

function Post() {
    return (
        <div>
            <div className='flex gap-5'>
                <Link href={"/"}><p><Image src={"/images/img1.jpg"} className="rounded" width={300} height={200} /></p></Link>

            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}><p className="text-orange-600 hover:text-orange-800">Business, Travel</p></Link>
                    <Link href={"/"}><p className="text-gray-800 hover:text-gray-600">- July 3, 2022</p></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><p className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</p></Link>
                </div>
                <Author />
            </div>

        </div>


    )
}


export default related