import React from 'react'

type Props = {}

const SignupForm = (props: Props) => {
  return (
    <div className="flex flex-col pt-[0.85rem] w-[400px] md:w-[800px] max-w-[950px]">
      <h3 className="my-0 mx-auto text-center pb-5 px-[5%] text-[1.2rem]">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form className="max-w-[950px]">
        <div className="flex flex-row items-stretch">
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
          <div className="flex items-center  bg-[#e50914] px-2">
            <button className="flex gap-1.5">
              <span className="">GET STARTTED</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
