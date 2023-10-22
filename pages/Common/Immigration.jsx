import React from 'react'

const Immigration = () => {
  return (
    <>
        <section className="immegration w-full">
            <div className='overlap-footer px-8 py-8 border-2 flex flex-col justify-center items-center mt-5'>
                <p className='font-bold uppercase border border-b border-blue-600 text-5xl text-white'>Immigration</p>
                <p className='text-gray-200 text-center mt-3 text-lg'>Nigeria is open for visits and obtaining an entry visa could not be any easier. Should you require a visa on arrival, please contact Mr Samson on </p>
                <a href="tel:+2348080598150" className="mt-8 btn btn-primary w-[300px] text-center p-3 bg-warning border border-white-800 text-white rounded"> <i className="bi bi-phone"></i> &nbsp; +234 808 059 8150</a>
            </div>
        </section>
    </>
  )
}

export default Immigration