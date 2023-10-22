import Image from 'next/image'
import React from 'react'
import LoveImage from "../../assets/img/hero-2.jpg"

const LoveStory = () => {
  return (
    <>
        <div className='max-w-screen-xl mx-3 md:mx-auto rounded-2xl mt-5 overflow-hidden bg-no-repeat bg-cover'>
          <div className='px-3 py-3 border-2 border-primary/75 bg-primary-light rounded-lg flex flex-col justify-center items-center mt-5'>
            <p className='font-bold uppercase border border-b border-blue-600 text-2xl'>Our  lOVE sTORY</p>
            <p className="text-center border border-b border-blue-600 text-gray-600 mt-2">
                This is our love story on how we met and how things went through.
            </p>

            
            <div className="grid-1 grid gap-8 mt-5 md:grid-cols-2 lg:grid-cols-2 p-4">
                <div className="space-y-8 text-center">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quod aliquid quisquam iusto 
                        voluptates odio, pariatur neque porro officia, qui est enim vitae nisi molestias, explicabo 
                        magni excepturi commodi similique?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quod aliquid quisquam iusto 
                        voluptates odio, pariatur neque porro officia, qui est enim vitae nisi molestias, explicabo 
                        magni excepturi commodi similique?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quod aliquid quisquam iusto 
                        voluptates odio, pariatur neque porro officia, qui est enim vitae nisi molestias, explicabo 
                        magni excepturi commodi similique?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quod aliquid quisquam iusto 
                        voluptates odio, pariatur neque porro officia, qui est enim vitae nisi molestias, explicabo 
                        magni excepturi commodi similique?
                    </p>
                </div>
                <div className="">
                    <Image src={LoveImage}  alt='/' />
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LoveStory