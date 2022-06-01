import React from 'react'

const RegisterHeader = () => {
  return (
    <div className="flex h-[45px] border-b-[1px] sm:h-[75px] md:h-[90px] justify-between">
      <img
        src="https://rb.gy/ulxxee"
        width={150}
        height={150}
        className="ml-10 cursor-pointer object-contain"
      />
      <a className="text-[19px] font-bold leading-[90px] text-[#333] mr-10">
        Sign In
      </a>
    </div>
  )
}

export default RegisterHeader
