import Link from 'next/link'
import React from 'react'
import CountDown from '../../Common/CountDown'

const Hero = () => {
  return (
    <>
        <header className="header w-full">
            <div className="overlap-group w-full lg:pt-20 flex-col">
                {/* backgrounds */}
                <div className="bg">
                    <div className="rectangle" />
                </div>
                <div className="group">
                    <div className="ellipse" />
                    <div className="ellipse-2" />
                </div>

                {/* Contents */}
                <div className="group-2 w-full items-center justify-center">
                    <center><i className='text-white text-center text-italic'>{'"'} 27th January 2024 {'"'}</i> <br /></center>
                    <div className="powering-the text-center md:text-[70px] text-[35px] font-[800]">
                        John & Amaka
                    </div>
                    <center>

                        <p className="element-specialise text-center mt-3 lg:w-[500px] font-[400] capitalize">
                            We will get married
                        </p>

                    </center>
                    <div className="buttons mt-10">
                        <div className="flex flex-col md:flex-row items-center justify-evenly">
                            <Link href={"/info-section"}><a href="#" className="btn btn-primary w-[300px] text-center p-3 bg-warning border border-white-800 text-white rounded">How can I get to the venue?</a></Link>
                            {/* <Link href={"/booksession"}><a href="#" className="btn btn-outlined-primary w-[300px] text-center p-3 mt-5 lg:mt-0 btn-outlined-white border border-white-800 text-white rounded">RSVP</a></Link> */}
                        </div>
                    </div>
                </div>

                <CountDown />
            </div>
        </header>
    </>
  )
}

export default Hero