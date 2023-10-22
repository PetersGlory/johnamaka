import React from 'react'

const Writetous = () => {
  return (
    <>
        <div className="w-full items-center justify-center p-5 flex flex-col">
            <h2 className="text-gray-600 mb-4 text-2xl font-bold uppercase">Write us a special note</h2>
            <div className="w-full">
                <div className="col-sm-12 mb-4 text-center">
                    <div className="p-4">
                        <iframe
                        className='iframe'
                        height="530"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe6twG-rzMkz5ntuRApVaCDYRBKZ3oaS_bGGRGRfij3F_LRdw/viewform?embedded=true&hl=en"
                        title="write us a message"
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

export default Writetous