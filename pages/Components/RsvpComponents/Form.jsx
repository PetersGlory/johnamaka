import React from 'react'

const Form = () => {
  return (
    <>
        <div className='max-w-screen-xl mx-3 md:mx-auto py-4 mt-5 overflow-hidden bg-no-repeat bg-cover mb-5'>        
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
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 text-warning">Guests</label>
                    <select name="select" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 bg-grwarning0 bordewarningy-600 placewarningr-gray-400 text-warning focuswarning-blue-500 focuswarninger-blue-500">
                        <option value="">1 Guest</option>
                        <option value="">2 Guest</option>
                        <option value="">3 Guest</option>
                        <option value="">4 Guest</option>
                    </select>
                    {/* <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 bg-grwarning0 bordewarningy-600 placewarningr-gray-400 text-warning focuswarning-blue-500 focuswarninger-blue-500" /> */}
                </div>
                
                <div className="mb-6">                
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 text-warning">Your message</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-grwarning0 bordewarningy-600 placewarningr-gray-400 text-warning focuswarning-blue-500 focuswarninger-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center bg-warning hover:bg-orange-700 focus:ring-blue-800">Submit</button>
            </div>
        </div>
    </>
  )
}

export default Form