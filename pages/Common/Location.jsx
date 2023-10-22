import React from 'react'

const Locationed = () => {
  return (
    <>
        <div className="w-full items-center justify-center p-5 flex flex-col py">
            <h2 className="text-gray-600 mb-4 text-2xl font-bold uppercase">Venue Map</h2>
            <div className="w-full">
                <div className="col-sm-12 mb-4 text-center">
                    <div className="p-4">
                        <iframe
                        className='iframe'
                        height="530"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2272799737107!2d6.916110575183698!3d6.1000629938863495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10439757ac3a5daf%3A0xb69a18ad8be608af!2sUke%2C%20Anambra!5e0!3m2!1sen!2sng!4v1697569767704!5m2!1sen!2sng"
                        title="Venue Map"
                        width="640"
                        >
                        Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Locationed