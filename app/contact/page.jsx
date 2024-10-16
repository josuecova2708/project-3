import React from 'react'

export default function Contact() {
    return (
        <main className='w-full '>
            <h1 className='text-center text-3xl font-semibold'>
                Contact Us
            </h1>
            <div className="w-full mt-7 h-[29rem] bg-cover bg-[url('/prac3recursos/themewagon/10.contact/image1.png')]">
                <form className="max-w-sm mx-auto pt-7">
                <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                           Your name
                        </label>
                        <input
                            type="text"
                            id="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="write your name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="name@hotmail.com"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                           Write your message
                        </label>
                        <input
                            type="text"
                            id="message"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 p-2.5"
                            required
                        />
                    </div>
                  
                    <button
                        type="submit"
                        className="button_gradient text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full  px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </main>
    )
}
