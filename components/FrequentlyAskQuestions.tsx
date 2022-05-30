import React, { useState } from 'react'
import SignupForm from './SignupForm'

type Props = {}

const frequentlyAskedQuestions = [
  {
    id: 1,
    question: 'What is Netflix?',
    anwser:
      'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    anwser2: `You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
  },
  {
    id: 2,
    question: 'How much does Netflix cost?',
    anwser:
      'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000&nbsp;₫ to 260,000&nbsp;₫ a month. No extra costs, no contracts.',
  },
  {
    id: 3,
    question: 'Where can I watch?',
    anwser:
      'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
    anwser2: `You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    id: 4,
    question: 'How do I cancel?',
    anwser:
      'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
  },
  {
    id: 5,
    question: 'What can I watch on Netflix?',
    anwser:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    id: 6,
    question: 'Is Netflix good for kids?',
    anwser:
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
    anwser2:
      'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
  },
]

const FrequentlyAskQuestions = (props: Props) => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleOpenAnwser = (id: number) => {
    if (id !== openIndex) {
      setOpenIndex(id)
    } else {
      setOpenIndex(0)
    }
  }
  return (
    <div className="relative border-b-8 border-b-[#222] bg-black py-[50px] px-[5%] md:py-[70px] md:px-[45px]">
      <div className="text-[1.625rem] font-normal">
        <h1 className="mb-2 text-center text-[3.125rem] leading-[1.1]">
          Frequently Asked Questions
        </h1>
        <ul className="my-[2em] mx-auto w-full max-w-[815px] md:w-[75%]">
          {frequentlyAskedQuestions.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => handleOpenAnwser(item.id)}
                className="relative mb-[1px] w-full bg-[#303030] py-[0.8em] pl-[1.2em] pr-[2.2] text-left"
              >
                {item.question}
                {item.id === openIndex ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 right-[1em] h-6 w-6 translate-y-[-50%]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 right-[1em] h-6 w-6 translate-y-[-50%]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </button>
              {item.id === openIndex && (
                <div className="max-h-[1200px] bg-[#303030]">
                  <span className="inline-block p-[1.2em]">
                    {item.anwser}
                    {item.anwser2 && (
                      <>
                        <br></br>
                        <br></br>
                        {item.anwser2}
                      </>
                    )}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <SignupForm />
      </div>
    </div>
  )
}

export default FrequentlyAskQuestions
