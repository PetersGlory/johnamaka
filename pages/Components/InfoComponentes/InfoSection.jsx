import React from 'react'

const InfoSection = () => {
    const handleTabs = (val) =>{}
  return (
    <>
        <section className="w-full py-4">
            <div className='px-8 py-8 border-2 flex flex-col justify-center items-center mt-5'>
                <p className='font-bold uppercase border border-b border-blue-600 text-5xl text-dark'>How you can get there..</p>
                <p className='text-gray-00 text-center mt-3 text-lg'>How you can find your way to the venue where the wedding is going to take place. </p>
            </div>

            <div className="mt-5 container">
                <ul
                    className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
                    role="tablist"
                    data-te-nav-ref>
                    <li role="presentation" className="flex-grow basis-0 text-center">
                        <a
                        href="#tabs-home02"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-home02"
                        data-te-nav-active
                        role="tab"
                        aria-controls="tabs-home02"
                        aria-selected="true"
                        onClick={()=>handleTabs("international")}
                        >International Guest</a>
                    </li>
                    <li role="presentation" className="flex-grow basis-0 text-center">
                        <a
                        href="#tabs-profile02"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-profile02"
                        role="tab"
                        aria-controls="tabs-profile02"
                        aria-selected="false"
                        onClick={()=>handleTabs("homebased")}
                        >Home Based Guests</a>
                    </li>
                    <li role="presentation" className="flex-grow basis-0 text-center">
                        <a
                        href="#tabs-messages02"
                        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                        data-te-toggle="pill"
                        data-te-target="#tabs-messages02"
                        role="tab"
                        aria-controls="tabs-messages02"
                        aria-selected="false"
                        onClick={()=>handleTabs("accomodation")}
                        >Accomodation</a>
                    </li>
                </ul>

                <div className="mb-6 items-center justify-center flex">
                    <div
                        className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block py-4 px-4 w-[70%]"
                        id="tabs-home01"
                        role="tabpanel"
                        aria-labelledby="tabs-home-tab02"
                        data-te-tab-active>
                        <h3 className='text-[30px] text-gray-600 text-gray-700 font-medium mb-2'>Transpotation</h3>
                        <p>
                            This is how you can route to the venue..

                            <ul>
                                <li className="mt-2">
                                    <small>
                                        <b>-</b> Take a flight to Lagos, Nigeria. All guests should endavour to arrive on or before 25th January 2024.
                                    </small>
                                </li>
                                <li className="mt-2">
                                    <small>
                                        <b>-</b> Once you have arrived, check into any hotel of your choice or our recommended hotels.
                                    </small>
                                </li>
                                <li className="mt-2">
                                    <small>
                                    <b>-</b> On the 26th January 2024, take a 45mins flight from either Lagos to Anambra airport or Lagos to Asaba airport. A team will be waiting at the airport to pick you up and take you to your Hotel.
                                    </small>
                                </li>
                                <li className="mt-2">
                                    <small>
                                    <b>-</b> Throughout your stay in our host city (Anambra), we will provide guests with transportation options. Cars and luxury buses will be available at your hotels.
                                    </small>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block py-4 px-4 w-[70%]"
                        id="tabs-profile02"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tab02">
                        <h3>Transpotation</h3>
                        <p>
                            We will be sending exact locations to your contact number.
                        </p>
                    </div>
                    <div
                        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block py-4 px-4 w-[70%]"
                        id="tabs-profile03"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tab02">
                        <p>
                        All our accomodation options in both Lagos will be provided at a slight subsidized cost. Our accomodation options are as follows:
                        </p>

                        <ul>
                            <h3>LAGOS</h3>
                            <li className="mt-2">
                                <small>
                                    <b>-</b> BWC HOTEL-1228B Ahmadu Bello Way, Victoria Island. Lagos.
                                </small>
                            </li>
                            <br />
                            <h3>ANAMBRA</h3>
                            <li className="mt-2">
                                <small>
                                    <b>-</b> DE LUMEN: 3 Bent Lane, GRA, Onitsha, Anambra.
                                </small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default InfoSection