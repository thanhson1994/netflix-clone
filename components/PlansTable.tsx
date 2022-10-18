import React from 'react'
import { deviceSvgPath } from '../constants/svgPath'
type Props = {}

const optionsData = [
  {
    title: 'Monthly price',
    options: [
      { key: 'Mobile', value: '70,000 ₫' },
      { key: 'Basic', value: '180,000 ₫' },
      { key: 'Standard', value: '220,000 ₫' },
      { key: 'Premium', value: '260,000 ₫' },
    ],
  },
  {
    title: 'Video quality',
    options: [
      { key: 'Mobile', value: 'Good' },
      { key: 'Basic', value: 'Good' },
      { key: 'Standard', value: 'Better' },
      { key: 'Premium', value: 'Best' },
    ],
  },
  {
    title: 'Resolution',
    options: [
      { key: 'Mobile', value: '480p' },
      { key: 'Basic', value: '480p' },
      { key: 'Standard', value: '1080p' },
      { key: 'Premium', value: '4K+HDR' },
    ],
  },
  {
    title: 'Devices you can use to watch',
    options: [
      { key: 'Mobile', value: 2 },
      { key: 'Basic', value: 4 },
      { key: 'Standard', value: 4 },
      { key: 'Premium', value: 4 },
    ],
  },
]

const getRowColor = (selected: boolean) => {
  return selected
    ? 'fill-[#e50914] text-[#e50914]'
    : 'fill-[#737373] text-[#737373]'
}

const PlansTable = ({ selection, setSelection }: any) => {
  const getDevicePlan = (title: string, listDevice: any) => {
    return (
      <tr key={title} className="flex min-h-[60px] flex-wrap items-start">
        <td className="min-h-[37px] w-full px-3 py-4 text-center text-[13px] sm:w-[35%]">
          {title}
        </td>
        {listDevice.map((data: any) => (
          <td
            onClick={() => setSelection(data.key)}
            className={`w-[25%] px-3 py-4 text-center sm:w-[16.25%] ${getRowColor(
              selection === data.key
            )}`}
          >
            {deviceSvgPath
              .filter((_, idx) => idx < data.value)
              .map((device) => (
                <div className="flex flex-col items-center">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    focusable="false"
                    className="mb-[-2px]font-bold mt-[6px]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d={device.path}
                      fill="currentColor"
                    ></path>
                  </svg>
                  <div className="font-[12px] mb-[6px] text-[12px] font-bold leading-[17px]">
                    {device.type}
                  </div>
                </div>
              ))}
          </td>
        ))}
      </tr>
    )
  }
  return (
    <table className="flex flex-col">
      <tbody>
        {optionsData.map((option, idx) => {
          if (idx === 3) {
            return getDevicePlan(option.title, option.options)
          } else {
            return (
              <tr
                key={option.title}
                className="flex min-h-[60px] flex-wrap items-start border-b-[1px] border-solid border-[#ccc]"
              >
                <td className="w-full px-[8px] pt-[16px] pb-[4px] text-center text-[13px] sm:w-[35%] sm:px-3 sm:py-4 sm:text-[16px]">
                  {option.title}
                </td>
                {option.options.map((data) => (
                  <td
                    onClick={() => setSelection(data.key)}
                    className={`w-[25%] p-[8px] text-center text-[12px] font-bold sm:w-[16.25%] sm:px-3 sm:py-4 sm:text-[14px] ${getRowColor(
                      selection === data.key
                    )}`}
                  >
                    {data.value}
                  </td>
                ))}
              </tr>
            )
          }
        })}
      </tbody>
    </table>
  )
}

export default PlansTable
