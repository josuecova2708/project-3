import React from 'react'
import Image from 'next/image'

export default function Blog() {
    return (
        <main className='w-full mt-6'>
            <h1 className='text-center text-4xl font-semibold'>
                Blog Post
            </h1>
            <p className='text-center mt-4'>
                Blogs are a great method to increase traffic and generate leads. Make a profit. <br />
                Get compensated for your efforts.
            </p>
            <div className='w-3/4 mx-auto flex gap-8 mt-10'>
                <div className='w-1/3 flex flex-col gap-4 shadow-xl rounded-2xl h-64 ps-7'>
                    <h2 className='text-purple-600 mt-3'>Article</h2>
                    <p className='text-xl font-semibold'>How do you use social media for <br />
                        growing traffic and sales?</p>
                    <figure className='w-52'>
                        <Image
                        src="/prac3recursos/themewagon/9.blog/Avatar1.png"
                        alt='list contact'
                        width={500}
                        height={500}
                        />
                    </figure>
                    <figure className='w-32 mt-6'>
                        <Image
                        src="/prac3recursos/themewagon/9.blog/likes.png"
                        alt='likes'
                        width={500}
                        height={500}
                        />
                    </figure>
                    
                </div>
                <div className='w-1/3 flex flex-col gap-4 shadow-xl rounded-2xl h-64 ps-7'>
                    <h2 className='text-purple-600 mt-3'>Lifestyle</h2>
                    <p className='text-xl font-semibold'>Health & fitness for busy people <br />
                        during times of stress</p>
                    <figure className='w-52'>
                        <Image
                        src="/prac3recursos/themewagon/9.blog/Avatar2.png"
                        alt='list contact'
                        width={500}
                        height={500}
                        />
                    </figure>
                    <figure className='w-32 mt-6'>
                        <Image
                        src="/prac3recursos/themewagon/9.blog/likes.png"
                        alt='likes'
                        width={500}
                        height={500}
                        />
                    </figure>
                    
                </div>
                <div className='w-1/3 flex flex-col gap-4 shadow-xl rounded-2xl h-64 ps-7'>
                    <h2 className='text-purple-600 mt-3'>CEO / Office</h2>
                    <p className='text-xl font-semibold'>QR codes- innovative ways to use <br />    
                        them in small business</p>
                    <figure className='w-52'>
                        <Image
                        src="/prac3recursos/themewagon/9.blog/Avatar3.png"
                        alt='list contact'
                        width={500}
                        height={500}
                        />
                    </figure>
                    <figure className='w-32 mt-6'>
                        <Image
                        src="/prac3recursos/themewagon/9.blog/likes.png"
                        alt='likes'
                        width={500}
                        height={500}
                        />
                    </figure>
                    
                </div>
            </div>
        </main>
    )
}
