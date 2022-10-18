import Head from 'next/head'
import React, { useState, useRef, useEffect } from 'react'
import Footer from './Footer'
import RegisterHeader from './RegisterHeader'

type Props = {
  children: JSX.Element
}

const SigninLayout = ({ children }: Props) => {
  return (
    <div className="bg-white text-[#333]">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterHeader />
      {children}
      <div className="bg-[#f3f3f3]">
        <Footer />
      </div>
    </div>
  )
}

export default SigninLayout
