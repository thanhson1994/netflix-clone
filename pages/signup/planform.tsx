import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react'
import Footer from '../../components/Footer'
import PlansTable from '../../components/PlansTable'
import RegisterHeader from '../../components/RegisterHeader'
import SigninLayout from '../../components/SigninLayout'

type Props = {}

type PlanOptions = 'Mobile' | 'Basic' | 'Standard' | 'Premium'

const planform = (props: Props) => {
  const [selection, setSelection] = useState<PlanOptions>('Premium')
  const [stickPosition, setStickPosition] = useState<boolean>(false)
  const router = useRouter()

  const myRef = useRef(null)

  const listOptions: PlanOptions[] = ['Mobile', 'Basic', 'Standard', 'Premium']

  const listOfBenefits = [
    'Watch all you want. Ad-free.',
    'Recommendations just for you.',
    'Change or cancel your plan anytime.',
  ]

  const handleSelectPlan = (planSelection: PlanOptions) => {
    setSelection(planSelection)
  }
  console.log('myRef', myRef)

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     console.log(myRef)
  //   })
  // }, [])

  const fixedPosition =
    stickPosition &&
    'fixed w-full translate-x-[-50%] top-0 left-1/2 max-w-[978px] px-4 bg-white'

  useEffect(() => {
    const handleScroll = (event: any) => {
      console.log('window.scrollY', window.scrollY)
      if (window.scrollY > 311.5) {
        setStickPosition(true)
      } else {
        setStickPosition(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const planSelectionStyle = (selected: boolean) =>
    selected
      ? 'after:border-x-[10px] after:border-t-[10px] opacity-100'
      : 'border-0 opacity-60'

  return (
    <SigninLayout>
      <main className="pb-[95px]">
        <div className="mx-auto mt-0 mb-4 max-w-[978px] pl-4 pr-4 pt-5 pb-16 opacity-100 duration-300">
          <div>
            <div className="flex flex-col px-4 py-0">
              <span>
                Step <b>2</b> of <b>3</b>
              </span>
              <h1 className="mb-4 inline-block text-left text-[32px] font-bold">
                Choose the plan that’s right for you
              </h1>
            </div>
            <div className="mb-5 px-4 py-0 text-[18px]">
              <ul>
                {listOfBenefits.map((item, idx) => (
                  <li
                    key={item}
                    className={`flex flex-row ${idx > 0 && 'mt-2'}`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[26px] w-[26px] flex-none self-start text-[#e50914]"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span className="ml-[10px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${stickPosition && 'pt-[91px] sm:pt-[144px]'}`}>
            <div
              ref={myRef}
              className={`flex flex-col items-end ${fixedPosition}`}
            >
              <div className="flex w-full justify-center text-[16px] sm:w-[65%]">
                {listOptions.map((item) => (
                  <label
                    onClick={() => handleSelectPlan(item)}
                    key={item}
                    className="w-[25%] py-[8px] px-[4px] sm:py-3"
                  >
                    <span
                      className={`relative my-0 mx-auto flex h-[75px] w-full items-center justify-center rounded-[2px] bg-[#e50914] p-[1px] text-[12px] 
                  font-bold text-white after:absolute after:top-full after:left-1/2 after:translate-x-[-50%] after:border-solid after:border-transparent after:border-t-[#e50914] sm:h-[90px] sm:w-[90px] sm:text-[17px] md:h-[120px] md:w-[120px] ${planSelectionStyle(
                    item === selection
                  )}`}
                    >
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <PlansTable selection={selection} setSelection={setSelection} />
            <small className="block p-0 text-[13px] text-[#737373] sm:pr-[150px] sm:pl-4">
              <span>
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                subject to your internet service and device capabilities. Not
                all content is available in all resolutions. See our
                <a
                  href="https://help.netflix.com/legal/termsofuse"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </span>
            </small>
            <small className="mt-3 block p-0 text-[13px] text-[#737373] sm:pr-[150px] sm:pl-4">
              <span>
                Only people who live with you may use your account. Watch on 4
                different devices at the same time with Premium, 2 with
                Standard, and 1 with Basic and Mobile.
              </span>
            </small>
          </div>
          <div className="mx-auto mt-6 max-w-[440px] px-4 text-center ">
            <button
              onClick={() => router.push('/signup/paymentPicker')}
              className="min-h-[64px] w-full min-w-[110px] rounded bg-[#e50914] py-3 px-[25px] text-[24px] font-medium text-[#fff]"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </SigninLayout>
  )
}

export default planform
