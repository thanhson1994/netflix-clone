import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import RegisterHeader from '../../components/RegisterHeader'
import { useRouter } from 'next/router'
import SigninLayout from '../../components/SigninLayout'

type Props = {}

const index = (props: Props) => {
  const router = useRouter()

  return (
    <SigninLayout>
      <main className="pb-[95px]">
        <div className="mx-auto mb-4 max-w-[978px]">
          <div className="mx-auto my-0 max-w-[340px] text-center">
            <div>
              <span className="bg-[50px] mx-auto mt-[100px] mb-5 block h-[50px] w-[50px] bg-[url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png)] bg-contain bg-no-repeat "></span>
            </div>
            <div>
              <span>
                Step <b>2</b> of <b>3</b>
              </span>
              <h1 className="mb-4 inline-block text-center text-[32px] font-bold">
                Choose your plan.
              </h1>
            </div>
            <div className="inline-block max-w-[300px] text-[18px]">
              <ul className="mt-4 mb-5 flex flex-col justify-between text-left">
                <li className="flex flex-row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-none self-start text-[#e50914]"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-[10px]">
                    No commitments, cancel anytime.
                  </span>
                </li>
                <li className="mt-5 flex flex-row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-none self-start text-[#e50914]"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-[10px]">
                    Everything on Netflix for one low price.
                  </span>
                </li>
                <li className="mt-5 flex flex-row">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-none self-start text-[#e50914]"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-[10px]">
                    No ads and no extra fees. Ever.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-[340px] text-center ">
            <button onClick={() => router.push('/signup/planform')} className="min-h-[64px] w-full min-w-[110px] rounded bg-[#e50914] py-3 px-[25px] text-[24px] font-medium text-[#fff]">
              Next
            </button>
          </div>
        </div>
      </main>
    </SigninLayout>
  )
}

export default index
