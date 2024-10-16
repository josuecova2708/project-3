import React from 'react'
import Image from 'next/image'
import icon1 from "../service/icon1.png"
import icon2 from "../service/icon2.png"
import icon3 from "../service/icon3.png"
export default function Service() {
  return (
    <>
      <main className='w-full mt-4'>
        <h1 className='text-center text-4xl font-semibold'>
          Service
        </h1>
        <p className='text-center mt-6 '>
          We offer youth with chances for career development in their practice. We also <br />
          support a wide range of services to ensure client satisfaction
        </p>
        <div className='card_container flex justify-center gap-14 mt-16 '>
          <div className="w-80 h-[28rem] bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center">

            <figure className='w-full h-40 flex items-start justify-center'>
              <Image
                src={icon1} alt='' width={130} height={130}
              />
            </figure>


            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Send Texts Instantly
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                Financial planning, forecasting and <br />
                adjusting rapidly with customer <br />
                demands and budgets.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2  text-sm font-medium text-center text-blue-600  rounded-lg  ">
                Learn more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 h-[28rem] bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center">

            <figure className='w-full h-40 flex items-start justify-center'>
              <Image
                src={icon2} alt='' width={130} height={130}
              />
            </figure>


            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Send Texts Instantly
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Financial planning, forecasting and <br />
                adjusting rapidly with customer <br />
                demands and budgets.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-600  rounded-lg  ">
                Learn more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-80 h-[28rem] bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center">

            <figure className='w-full h-40 flex items-start justify-center'>
              <Image
                src={icon3} alt='' width={130} height={130}
              />
            </figure>


            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Analytical Statistics
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Messages, real-time reminders <br />
                , memos, and many more will <br />
                keep your team in sync.


              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-600  rounded-lg  ">
                Learn more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
