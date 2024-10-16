import React from 'react'
import Image from 'next/image'

export default function Projects() {
    return (
        <main className='container w-full'>
            <h1 className='text-4xl font-semibold text-center'>
                Our Projects
            </h1>
            <p className='text-center mt-4'>
                A project is a single or team activity, combining research and design with best <br />
                effort. Here are some of our team's projects
            </p>
            <div className='w-1/2 mx-auto flex h-[30rem] mt-16 gap-7 '>
                <div className='w-1/3 flex flex-col items-center h-full'>
                    <figure className='w-full h-2/5'>
                        <Image
                            src="/prac3recursos/themewagon/6.projects/image1.png"
                            alt='cellphone'
                            width={500}
                            height={500}
                        />

                    </figure>
                    <figure className='w-full h-3/5'>
                        <Image
                            src="/prac3recursos/themewagon/6.projects/image2.png"
                            alt='cellphone'
                            width={500}
                            height={500}
                        />

                    </figure>
                </div>
                <div className='w-1/3 flex flex-col items-center h-full gap-10'>
                    <figure className='w-full h-3/5'>
                        <Image
                            src="/prac3recursos/themewagon/6.projects/image3.png"
                            alt='cellphone'
                            width={500}
                            height={500}
                        />

                    </figure>
                    <figure className='w-full h-2/5'>
                        <Image
                            src="/prac3recursos/themewagon/6.projects/image4.png"
                            alt='cellphone'
                            width={500}
                            height={500}
                        />
                    </figure>
                </div>
                
                <div className='w-1/3 flex flex-col items-center h-full'>
                    <figure className='w-full h-2/5'>
                        <Image
                            src="/prac3recursos/themewagon/6.projects/image5.png"
                            alt='cellphone'
                            width={500}
                            height={500}
                        />

                    </figure>
                    <figure className='w-full h-3/5'>
                        <Image
                            src="/prac3recursos/themewagon/6.projects/image6.png"
                            alt='cellphone'
                            width={500}
                            height={500}
                        />

                    </figure>
                </div>
            </div>

        </main>
    )
}
