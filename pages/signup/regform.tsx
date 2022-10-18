import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../../components/Footer'
import RegisterHeader from '../../components/RegisterHeader'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'

type Props = {}
interface Inputs {
  email: string
  password: string
}
const regform = (props: Props) => {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    if (login) {
      await signIn(data.email, data.password)
    } else {
      await signUp(data.email, data.password)
    }
  }
  return (
    <div className="bg-white text-[#333]">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterHeader />
      <main className="pb-[95px]">
        <div className="mx-auto mb-4 max-w-[978px]">
          <div className="mx-auto my-0 mt-10 max-w-[440px] text-left">
            <div>
              <span>
                Step <b>1</b> of <b>3</b>
              </span>
              <h1 className="mb-4 inline-block text-[32px] font-bold">
                Create a password to start your membership
              </h1>
            </div>
            <div className="inline-block text-[18px]">
              Just a few more steps and you're done!
            </div>
            <div className="mt-2 inline-block text-[18px]">
              We hate paperwork, too.
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 ">
                <label className="relative flex flex-auto bg-white border-solid border-1 border-[#8c8c8c]">
                  <input
                    className="peer form-input w-full px-0 pt-3.5 pb-0 text-sm text-black placeholder-transparent focus:ring-0"
                    id="name"
                    type="text"
                    placeholder="Email addess"
                  />

                  <span className="absolute left-3 text-xs font-medium text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs">
                    Email address
                  </span>
                </label>
                <label className="relative flex flex-auto bg-white p-3">
                  <input
                    className="peer form-input w-full border-none px-0 pt-3.5 pb-0 text-sm text-black placeholder-transparent focus:ring-0"
                    id="name"
                    type="text"
                    placeholder="Email addess"
                  />

                  <span className="absolute left-3 text-xs font-medium text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs">
                    Email address
                  </span>
                </label>
              </div>
            </form>
            <div onClick={() => router.push('/signup')} className="mx-auto mt-6 text-center ">
              <button className="min-h-[64px] w-full min-w-[110px] rounded bg-[#e50914] py-3 px-[25px] text-[24px] font-medium text-[#fff]">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-[#f3f3f3]">
        <Footer />
      </div>
    </div>
  )
}

export default regform
