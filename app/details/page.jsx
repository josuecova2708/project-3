import React from 'react'
import Image from 'next/image'
export default function Details() {
    return (
        <main className='container w-4/5 mx-auto flex flex-col'>
            <div className='card_container w-3/5 flex mx-auto mt-5 h-80'>
                <div className='w-1/2 flex justify-center items-center   '>
                 <figure className='size-72 me-11 '>
                    <Image
                    src="/prac3recursos/themewagon/4.details/illustration3.png"
                    alt='imagen pc'
                    width={500}
                    height={500}
                    className='w-full h-full'
                    />
                 </figure>
                </div>
                <div className='flex flex-col items-center justify-center'>
              <h2 className='text-2xl font-semibold'>
              A creative team which <br />
              builds stunning UI/UX
              </h2>
              <p className='mt-4 text-sm'>
              Today, I'd like to show you some incredible Sign Up screen app <br />
               UI ideas and concepts that offer a modern user experience. <br />
              The most stunning, cutting-edge UI/UX.
              </p>
              <p className='mt-4 text-sm'>
              Klean is a free Bootstrap 5 template for multipurpose landing <br />
              pages. This design is a perfect choice, carefully curated by <br />
              <span className='font-semibold'>ThemeWagon</span>  
              </p>
                </div>

            </div>
            <div className='card_container w-3/5 flex mx-auto mt-5 h-80'>
                <div className='flex flex-col items-center justify-center'>
              <h2 className='text-2xl font-semibold'>
              Devoted to defining <br />
               the cutting edge
              </h2>
              <p className='mt-4 text-sm'>
              Today, I'd like to show you some incredible Sign Up screen app <br />
               UI ideas and concepts that offer a modern user experience. <br />
              The most stunning, cutting-edge UI/UX.
              </p>
              <p className='mt-4 text-sm'>
              Klean is a free Bootstrap 5 template for multipurpose landing <br />
              pages. This design is a perfect choice, carefully curated by <br />
              <span className='font-semibold'>ThemeWagon</span>  
              </p>
                </div>
                <div className='w-1/2 flex justify-center items-center   '>
                 <figure className='size-72 ms-11 '>
                    <Image
                    src="/prac3recursos/themewagon/4.details/illustration6.png"
                    alt='imagen pc'
                    width={500}
                    height={500}
                    className='w-full h-full'
                    />
                 </figure>
                </div>  

            </div>
        </main>
    )
}
