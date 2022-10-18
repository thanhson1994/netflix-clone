import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../../components/Footer'
import RegisterHeader from '../../components/RegisterHeader'
import SigninLayout from '../../components/SigninLayout'

type Props = {}

const paymentPicker = (props: Props) => {
  const router = useRouter()

  return (
    <SigninLayout>
      <main className="pb-[95px]">
        <div className="mx-auto mb-4 max-w-[978px] px-[32px]">
          <div className="mx-auto my-0 max-w-[500px] text-center">
            <div className="mb-5 text-center">
              <div>
                <span className="mx-auto mt-[50px] mb-5 block h-[50px] w-[50px] bg-[url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png)] bg-contain bg-no-repeat "></span>
              </div>
              <div>
                <span className="block">
                  Step <b>3</b> of <b>3</b>
                </span>
                <h1 className="mb-4 inline-block text-center text-[32px] font-bold">
                  Set up your payment
                </h1>
              </div>
              <div className="my-0 mx-auto max-w-[205px]">
                <div className="block max-w-[299px] text-center text-[18px]">
                  Your membership starts as soon as you set up payment.
                </div>
                <div className="mt-[10px] inline-block max-w-[299px] text-[18px] font-bold">
                  <div>No commitments.</div>
                  <div>Cancel online anytime.</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse items-end justify-start">
              <svg
                id="secure-server-icon"
                viewBox="0 0 12 16"
                className="ml-[2px] h-4 w-4"
              >
                <g fill="none">
                  <g fill="#FFB53F">
                    <path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z"></path>
                  </g>
                </g>
              </svg>
              <div className="h-[14px] text-[13px]">Secure Server</div>
            </div>
            <div
              onClick={() => router.push('/signup/creditoption')}
              className="mt-[5px]"
            >
              <div className="relative flex h-[auto] min-h-[60px] cursor-pointer items-center border-2 border-solid border-[#ccc]">
                <div className="flex h-[auto] w-[90%] flex-wrap items-center py-[15px] leading-[60px]">
                  <div className="my-[5px] ml-[15px] leading-[20px]">
                    <span className="text-[#0071eb]">Credit or Debit Card</span>
                  </div>
                  <div className="mx-[15px] leading-[20px]">
                    <span>
                      <img
                        className="mr-[6px] inline-block h-[25px] w-auto"
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg"
                      />
                      <img
                        className="mr-[6px] inline-block h-[25px] w-auto"
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
                      />
                      <img
                        className="mr-[6px] inline-block h-[25px] w-auto"
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
                      />
                    </span>
                  </div>
                </div>
                <span className="absolute right-0 top-1/2 mr-[4px] h-[1em] w-[1em] translate-y-[-50%] bg-[url(https://assets.nflxext.com/ffe/siteui/acquisition/reg_selection/chevron_060915_2.svg)] bg-contain  bg-no-repeat text-[19px] font-normal text-[#333]"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SigninLayout>
  )
}

export default paymentPicker
