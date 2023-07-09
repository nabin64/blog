import Header from '@/components/header'
import React from 'react'
import Footer from '@/components/footer'
import Head from 'next/head'

const layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Blog</title>
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
    
    </>
  )
}

export default layout