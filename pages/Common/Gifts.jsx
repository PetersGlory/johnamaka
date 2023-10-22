import React from 'react'

const Gifts = () => {
  return (
    <>
        <section className="immegration w-full">
            <div className='overlap-footer px-8 py-8 border-2 flex flex-col justify-center items-center mt-5'>
                <p className='font-bold uppercase border border-b border-blue-600 text-5xl text-white'>Cash Gifts</p>
                <p className='text-gray-200 text-center mt-3 text-lg'>Your presence is more than enough for us! However, if you would love to send us a gift, kindly use the button below. </p>
                <a href="#!" className="mt-8 btn btn-primary w-[300px] text-center p-3 bg-warning border border-white-800 text-white rounded"> Send Gift</a>
            </div>
        </section>
    </>
  )
}

export default Gifts