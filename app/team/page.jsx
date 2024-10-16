import React from 'react'
import Image from 'next/image'
export default function Team() {
    return (
        <main className='w-full flex-col flex items-center'>
            <h1 className='text-center text-4xl font-semibold'>
                Our Team
            </h1>
            <p className='text-center mt-4'>
                People from various origins, cultures, and personalities make up our team. <br />
                This blend makes it a powerful team
            </p>
            <div className='card-section w-3/5 mx-auto flex mt-8 gap-5'>
                <div className='card w-1/4 h-96'>
                    <figure>
                        <Image
                            src="/prac3recursos/themewagon/7..team/image1.png"
                            alt='cards'
                            width={1000}
                            height={1000}
                        />
                    </figure>
                    <div>
                        <h2 className='text-center text-2xl font-semibold'>
                            Jhon Adams
                        </h2>
                        <p className='text-center'>
                            CEO
                        </p>
                    </div>
                </div>
                <div className='card w-1/4 h-96'>
                    <figure>
                        <Image
                            src="/prac3recursos/themewagon/7..team/image2.png"
                            alt='cards'
                            width={1000}
                            height={1000}
                        />
                    </figure>
                    <div>
                        <h2 className='text-center text-2xl font-semibold'>
                            Carrey Johnson
                        </h2>
                        <p className='text-center'>
                            Senior Developer
                        </p>
                    </div>
                </div>
                <div className='card w-1/4 h-96'>
                    <figure>
                        <Image
                            src="/prac3recursos/themewagon/7..team/image3.png"
                            alt='cards'
                            width={1000}
                            height={1000}
                        />
                    </figure>
                    <div>
                        <h2 className='text-center text-2xl font-semibold'>
                            Ray Marie
                        </h2>
                        <p className='text-center'>
                            Developer
                        </p>
                    </div>
                </div>
                <div className='card w-1/4 h-96'>
                    <figure>
                        <Image
                            src="/prac3recursos/themewagon/7..team/image4.png"
                            alt='cards'
                            width={1000}
                            height={1000}
                        />
                    </figure>
                    <div>
                        <h2 className='text-center text-2xl font-semibold'>
                            Austin Min
                        </h2>
                        <p className='text-center'>
                            Designer
                        </p>
                    </div>
                </div>
            </div>
            <button className='w-24 border-2 rounded-md  h-6 text-sm mt-11' > 
                View Full Team
            </button>


        </main>
    )
}
