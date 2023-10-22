import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer container --> */}
      <footer className="flex flex-col text-center text-neutral-600 items-center justify-center lg:text-left">

        <div className="overlap-footer w-full items-center flex-col">
          {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
          <div className="w-[90%] p-4 py-10 text-center items-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
            
              {/* <!-- Wedding links section --> */}
              <div className="">
                <h6 className="mb-4 text-white flex justify-center font-semibold uppercase md:justify-start">
                  Wedding Programs
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-700">
                    Churh Wedding (After Engagement)
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-700">
                    Engagement (Saturday 26th January, 2024)
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-700">
                    Traditional Wedding.
                  </a>
                </p>
              </div>
              {/* <!-- Products section --> */}
              <div className="">
                <h6 className="mb-4 text-white flex justify-center font-semibold uppercase md:justify-start">
                  Quick Links
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-700">
                    RSVP
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-700">
                    Navigation
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-700">
                    Contact
                  </a>
                </p>
              </div>
              {/* <!-- Contact section --> */}
              <div>
                <h6 className="mb-4 flex text-white justify-center font-semibold uppercase md:justify-start">
                  Location
                </h6>
                <p className="mb-4 flex items-center text-neutral-400 justify-center md:justify-start">
                  <i className="bi bi-geo-alt"></i> &nbsp;
                  Uke Anambra State, Nigeria.
                </p>
                <p className="mb-4 flex items-center text-neutral-400 justify-center md:justify-start">
                  <i className="bi bi-envelope"></i> &nbsp;
                  info@gmail.com
                </p>
                <p className="mb-4 flex items-center text-neutral-400 justify-center md:justify-start">
                  <i className="bi bi-telephone"></i> &nbsp; + 01 234 567 88
                </p>
                <p className="flex items-center text-neutral-400 justify-center md:justify-start">
                  <i className="bi bi-telephone"></i> &nbsp; + 01 234 567 89
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Tailwind Elements section --> */}
              <div className="flex flex-col items-center">

                <div className="mt-4 mb-5">
                <div className="flex justify-center">
                  <a
                    href="#!"
                    className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-orange-700 text-2xl"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    href="#!"
                    className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-orange-700 text-2xl"
                  >
                    <i className="bi bi-tiktok"></i>
                  </a>
                  <a
                    href="#!"
                    className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-orange-700 text-2xl"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a
                    href="#!"
                    className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-orange-700 text-2xl"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="#!"
                    className="mr-6 text-neutral-600 dark:text-neutral-200 hover:text-orange-700 text-2xl"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                </div>
              </div>
            {/* <!-- Services section --> */}

          {/* <!--Copyright section--> */}
          <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 w-full">
            <span className="text-gray-300">© 2023 Copyright: </span>
            <a
              className="font-semibold text-neutral-100 dark:text-neutral-100"
              href="./"
            >
              John and Amaka
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer
