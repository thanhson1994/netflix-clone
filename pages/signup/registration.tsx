import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import RegisterHeader from '../../components/RegisterHeader'

type Props = {}

const registration = (props: Props) => {
  return (
    <div className="bg-white text-[#333]">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterHeader />
      <main className="pb-[95px]">
        <div className="mx-auto mb-4 max-w-[978px]">
          <div className="mx-auto my-0 max-w-[340px] text-center">
            <div>
              <span className="mx-auto mt-[100px] mb-5 block h-[90px] w-[260px] bg-[url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png)] bg-contain bg-no-repeat "></span>
            </div>
            <div>
              <span></span>
              <h1 className="mb-4 inline-block text-center text-[32px] font-bold">
                Finish setting up your account
              </h1>
            </div>
            <div className="inline-block max-w-[299px] text-[18px] ">
              Netflix is personalized for you. Create a password to watch on any
              device at any time.
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-[340px] text-center ">
            <button className="min-h-[64px] w-full min-w-[110px] rounded bg-[#e50914] py-3 px-[25px] text-[24px] font-medium text-[#fff]">
              Next
            </button>
          </div>
        </div>
      </main>
      <div className="bg-[#f3f3f3]">
        <Footer />
      </div>
    </div>
  )
}

export default registration
