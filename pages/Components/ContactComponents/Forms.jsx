import React from 'react'
import Locationed from '../../Common/Location'

const Forms = () => {
  return (
    <>
        <Locationed />
        <div className='flex flex-col justify-center items-center pt-[6%]'>
            <div className='w-full p-5 pt-8 md:p-10 flex flex-col md:flex-row justify-center items-center'>
                <div className="contact_info flex-1 w-full items-center mt-8 lg:mt-0">
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-8/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    {/* <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                            stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                        </svg>
                                        </div>
                                    </div> */}
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold text-warning">
                                            Call Us
                                        </p>
                                        
                                        <p className="text-gray-800">
                                        +1 234-567-89
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-8/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    {/* <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                            stroke="currentColor" className="h-6 w-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                        </div>
                                    </div> */}
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold text-warning">
                                            Email
                                        </p>
                                        <p className="text-gray-800">
                                            info@gmail.com
                                        </p>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-8/12 md:px-3 lg:px-6">
                                <div className="align-start flex">
                                    {/* <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                                stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                            </svg>
                                        </div>
                                    </div> */}
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold text-warning">Wedding Date / Location</p>
                                        <p className="text-gray-800">
                                            27th January, 2024.
                                        </p>
                                        <p className="text-gray-800">
                                            Uke Anambra State, Nigeria.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form flex-1 w-full">
                    <h3 className="text-gray-700 text-[20px] md:text-[35px] font-[700] mb-2">Are you attending?</h3>
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 text-warning">Full Name</label>
                        <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 bg-grwarning0 bordewarningy-600 placewarningr-gray-400 text-warning focuswarning-blue-500 focuswarninger-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 text-warning">Email Address</label>
                        <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 bg-grwarning0 bordewarningy-600 placewarningr-gray-400 text-warning focuswarning-blue-500 focuswarninger-blue-500" />
                    </div>
                    <div className="mb-6">                
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 text-warning">Your message</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-grwarning0 bordewarningy-600 placewarningr-gray-400 text-warning focuswarning-blue-500 focuswarninger-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center bg-warning hover:bg-orange-700 focus:ring-blue-800">Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forms