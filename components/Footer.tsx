import React from 'react'

type Props = {}

const listItemFooter = [
  {
    id: 1,
    title: 'FAQ',
  },
  {
    id: 2,
    title: 'Help Center',
  },
  {
    id: 3,
    title: 'Account',
  },
  {
    id: 4,
    title: 'Media Center',
  },
  {
    id: 5,
    title: 'Investor Relations',
  },
  {
    id: 6,
    title: 'Jobs',
  },
  {
    id: 7,
    title: 'Ways to Watch',
  },
  {
    id: 8,
    title: 'Terms of Use',
  },
  {
    id: 9,
    title: 'Privacy',
  },
  {
    id: 10,
    title: 'Cookie Preferences',
  },
  {
    id: 11,
    title: 'Corporate Information',
  },
  {
    id: 12,
    title: 'Contact Us',
  },
  {
    id: 13,
    title: 'Speed Test',
  },
  {
    id: 14,
    title: 'Legal Notices',
  },
  {
    id: 15,
    title: 'Only on Netflix',
  },
]

const Footer = (props: Props) => {
  return (
    <div className="relative mx-auto  my-0 max-w-[1000px] py-[50px] px-[5%] pb-0 md:py-[70px] md:px-[45px]">
      <div className="relative w-full pb-5 text-[1em] text-[#757575]">
        <div className="mx-auto my-0 w-[90%]">
          <p className="mb-8">
            <a>Questions? Contact us.</a>
          </p>
          <ul className="max-w-[1000px] text-[13px]">
            {listItemFooter.map((item) => (
              <li
                key={item.id}
                className="mb-4 inline-block w-[50%] min-w-[100px] p-0 pr-3 sm:w-[33%] md:w-[25%]"
              >
                <a className="cursor-pointer">
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
