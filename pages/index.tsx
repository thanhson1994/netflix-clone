import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SignupForm from '../components/SignupForm'
import { useRouter } from 'next/router'
import FrequentlyAskQuestions from '../components/FrequentlyAskQuestions'
import Footer from '../components/Footer'

type Props = {}

const Home = (props: Props) => {
  const router = useRouter()

  const redirectToLogin = () => {
    router.push('/login')
  }
  console.log('router', router)

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative flex h-[50vh] w-full flex-col border-b-8 border-b-[#222] sm:h-[50vh] md:h-[95vh]">
          <div className="absolute top-0 left-0 -z-10 h-[100%] w-full">
            <Image
              src="https://rb.gy/p2hphi"
              layout="fill"
              className="-z-10 opacity-60 sm:!inline"
              objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-between space-x-2 pt-[20px] md:space-x-10">
            <img
              src="https://rb.gy/ulxxee"
              width={150}
              height={150}
              className="ml-10 cursor-pointer object-contain"
            />
            <ul className="space-x-4 pr-10 md:flex">
              <button
                onClick={redirectToLogin}
                className="flex gap-1.5 rounded bg-[#e50914] py-[6px] px-[20px] text-[1rem] font-normal"
              >
                Sign In
              </button>
            </ul>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center md:py-[70px] md:px-[45px]">
            <h1 className="mx-auto my-0 max-w-[640px] text-center text-[1.75rem] leading-[1.1] md:text-[3.125rem] lg:text-[4rem]">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="mx-auto my-[1rem] max-w-[640px] text-center text-[1.125rem] leading-[1.1] md:max-w-[800px] md:text-[1.625rem]">
              Watch anywhere. Cancel anytime.
            </h2>
            <SignupForm />
          </div>
        </div>
        <section className="bg-black">
          <div className="relative border-b-8 border-b-[#222] bg-black py-[50px] px-[5%] md:py-[70px] md:px-[40px]">
            <div className="mx-auto my-0 flex max-w-[1100px] flex-col items-center justify-between md:flex-row">
              <div className="h-[100%] w-full flex-initial text-center md:w-[52%]">
                <h1 className="mb-2 text-2xl leading-[1.1] md:text-5xl">
                  Enjoy on your TV.
                </h1>
                <h2 className=" mt-[0.75em] mb-[0.25em] text-[1.125rem] font-normal md:text-[1.625rem]">
                  Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </h2>
              </div>
              <div className="mt-[1em] flex h-[100%] w-full max-w-[600px] flex-initial md:w-[48%]">
                <div className="relative overflow-hidden">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
                  <div className="absolute top-[21%] left-[13%] h-full max-h-[54%] w-full max-w-[73%]">
                    <video autoPlay={true} playsInline={true} loop muted>
                      <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-b-8 border-b-[#222] bg-black py-[50px] px-[5%] md:py-[70px] md:px-[45px]">
            <div className="mx-auto my-0 flex max-w-[1100px] flex-col items-center justify-between md:flex-row-reverse">
              <div className="h-[100%] w-full flex-initial pl-12 text-center md:w-[52%] md:text-left">
                <h1 className="mb-2 text-2xl leading-[1.1] md:text-5xl">
                  Download your shows to watch offline.
                </h1>
                <h2 className=" mt-[0.75em] mb-[0.25em] text-[1.125rem] font-normal md:text-[1.625rem]">
                  Save your favorites easily and always have something to watch.
                </h2>
              </div>
              <div className="mt-[1em] flex h-[100%] w-full max-w-[600px] flex-initial md:w-[48%]">
                <div className="relative overflow-hidden">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                  <div
                    className="absolute bottom-[8%] left-[50%] flex h-full max-h-[54%] w-full 
                  max-w-[73%] translate-x-[-50%] items-center rounded-[0.75em] border-2 border-[rgba(255,255,255,.25)] md:w-[60%]"
                  >
                    {/* <div>
                      <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-b-8 border-b-[#222] bg-black py-[50px] px-[5%] md:py-[70px] md:px-[45px]">
            <div className="mx-auto my-0 flex max-w-[1100px] flex-col items-center justify-between md:flex-row">
              <div className="h-[100%] w-full flex-initial pl-12 text-center md:w-[52%]">
                <h1 className="mb-2 text-2xl leading-[1.1] md:text-5xl">
                  Watch everywhere.
                </h1>
                <h2 className=" mt-[0.75em] mb-[0.25em] text-[1.125rem] font-normal md:text-[1.625rem]">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </h2>
              </div>
              <div className="mt-[1em] flex h-[100%] w-full max-w-[600px] flex-initial md:w-[48%]"></div>
            </div>
          </div>

          <div className="relative border-b-8 border-b-[#222] bg-black py-[50px] px-[5%] md:py-[70px] md:px-[45px]">
            <div className="mx-auto my-0 flex max-w-[1100px] flex-col items-center justify-between md:flex-row-reverse">
              <div className="h-[100%] w-full flex-initial pl-12 text-center md:w-[52%] md:text-left">
                <h1 className="mb-2 text-2xl leading-[1.1] md:text-5xl">
                  Create profiles for kids.
                </h1>
                <h2 className=" mt-[0.75em] mb-[0.25em] text-[1.125rem] font-normal md:text-[1.625rem]">
                  Send kids on adventures with their favorite characters in a
                  space made just for them—free with your membership.
                </h2>
              </div>
              <div className="mt-[1em] flex h-[100%] w-full max-w-[600px] flex-initial md:w-[48%]">
                <div className="relative overflow-hidden">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-b-8 border-b-[#222] bg-black py-[50px] px-[5%] md:py-[70px] md:px-[45px]">
            <div className="mx-auto my-0 flex max-w-[1100px] flex-col items-center justify-between md:flex-row">
              <div className="h-[100%] w-full flex-initial pr-12 text-center md:w-[52%] md:text-left">
                <h1 className="mb-2 text-2xl leading-[1.1] md:text-5xl">
                  Have an Android Phone? Get our new free plan!
                </h1>
                <h2 className=" mt-[0.75em] mb-[0.25em] text-[1.125rem] font-normal md:text-[1.625rem]">
                  Watch a selection of new movies and TV shows without adding
                  any payment details!
                </h2>
              </div>
              <div className="mt-[1em] flex h-[100%] w-full max-w-[600px] flex-initial md:w-[48%]">
                <div className="relative overflow-hidden">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg" />
                </div>
              </div>
            </div>
          </div>
          <FrequentlyAskQuestions />
          <Footer />
        </section>
      </main>
    </div>
  )
}

export default Home
