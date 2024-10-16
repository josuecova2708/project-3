import React from 'react'
import Image from 'next/image'
export default function Testimonials() {
    return (
        <main className='w-full mt-5'>
            <h1 className='text-center text-4xl font-semibold'>
                What our clients have to say
            </h1>
            <p className='text-center mt-4'>
                Our success is determined on how satisfied our customers are with the <br />
                service. These reviews say we have stuff to do.
            </p>
            <div className='w-3/4 flex mx-auto mt-10'>

                <div className='w-2/5 flex justify-center' > 
                    <figure className='w-2/3'>
                    <Image
                            src="/prac3recursos/themewagon/8.testimonial/image1.png"
                            alt='cards'
                            width={1000}
                            height={1000}
                            className='w-full h-full'
                        />
                    </figure>
                </div>

                <div className='w-3/5'>
                <figure className='size-20'>
               <Image
               src="/prac3recursos/themewagon/8.testimonial/Quote Icon.png"
                  alt='quotes'
                  width={500}
                  height={500}
                  className='w-full h-full'
               />
                </figure>
                <h2 className='text-3xl text-purple-400 '>Outstanding</h2>
                <p className='mt-6'>
                I just wanted to drop you a little email to say thank you for all your hard work. <br />
                 I'm delighted I chose you as my partner. Your websites are quite simple to edit <br />
                  and maintain, which is fantastic.
                </p>
                <figure className='w-36 mt-4 '>
                <Image
               src="/prac3recursos/themewagon/8.testimonial/Rating.png"
                  alt='quotes'
                  width={500}
                  height={500}
                  className='w-full h-full'
               />
                </figure>
                <p className='mt-3'>
                    <span className='font-semibold'>Daniel Lane</span>, Developer
                </p>
                </div>

            </div>

        </main>
    )
}