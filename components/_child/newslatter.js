import React from 'react'

const newslatter = () => {
  return (
    <section className='bg-gray-50 mt-20'>


        <div className='container mx-auto md: px-20 py-16 text-center'>
            <h1 className='font-bold text-3xl'>Suscribe Newslatter</h1>
            <div className='py-4'>
                <input type="text" className='shadow border rounded-full w-9/12 py-3 px-3 text-gray-700 focus:outline-none  focus:shadow-outline' placeholder='Enter your email'/>
            </div>
            <button className='bg-orange-400 px-20 py-3 rounded-full text-gray-5'>
                Suscribe 
            </button>
        </div>
    </section>
  )
}

export default newslatter