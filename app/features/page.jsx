import React from 'react'
import Image from 'next/image'
import icon1 from "../features/icon1.png"
import icon2 from "../features/icon2.png"
import icon3 from "../features/icon3.png"
import icon4 from "../features/icon4.png"
import icon5 from "../features/icon5.png"
import icon6 from "../features/icon6.png"
export default function Features() {

    return (

        <>
            <main className='w-full'>
                <div>
                    <h1 className='text-center text-4xl font-semibold'>
                        Features
                    </h1>
                    <p className='text-center mt-6 '>
                    We provide a number of excellent features that will undoubtedly improve the <br />
                     user experience. We also provide a better support system
                    </p>
                </div>

                <div className='w-4/5 h-96 grid grid-cols-3 mx-auto mt-4'>

                    <div className='flex flex-col items-center'>
                        <Image src={icon1}
                        width={100}
                        height={100}
                        />
                        <h2 className='font-semibold'>Encrypted email</h2>
                        <p className='text-center'>A process of encrypting email <br />
                        communications</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <Image src={icon2}
                        width={100}
                        height={100}
                        />
                        <h2 className='font-semibold'>Display Sharing</h2>
                        <p className='text-center'> With other participants, you may share <br />
                         your screen</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={icon3}
                        width={100}
                        height={100}
                        />
                        <h2 className='font-semibold'>Private Notebook</h2>
                        <p className='text-center'>Private Notebook is an application that <br />
                         is protected</p>
                    </div>  
                    <div className='flex flex-col items-center'>
                        <Image src={icon4}
                        width={100}
                        height={100}
                        />
                        <h2 className='font-semibold'>An App Assistance</h2>
                        <p className='text-center'>App Assistant is quickly and effectively <br />
                         ran the system</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={icon5}
                        width={100}
                        height={100}
                        />
                        <h2 className='font-semibold'>Multiple Printing</h2>
                        <p className='text-center'>Our Canvas prints are crafted on <br />
                        top-notch canvas</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={icon6}
                        width={100}
                        height={100}
                        />
                        <h2 className='font-semibold'>Free Sketch</h2>
                        <p className='text-center'>Our canvas prints are crafted on <br />
                         top-notch canvas.</p>
                    </div>
                    
                 

                </div>

            </main>

        </>

    )
}
