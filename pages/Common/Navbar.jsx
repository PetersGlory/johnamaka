/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/img/logo.png"
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [menu, setMenu] = useState(true);
  const routers = useRouter();
  // if()
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = ()=>{
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  }

  const handleMenu = () =>{
    if(window.screen.width < 600){
      if(menu === false){
        setMenu(true);
        setColorchange(false);
      }else{
        setMenu(false);
        setColorchange(true);
      }
    }
  }
  return (
    <>      
      <nav className={colorChange ? "bg-white dark:bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 " : "fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"} id="navbar">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <a href="#" className={colorChange ? "flex items-center text-gray-800 font-bold" : "flex items-center text-white font-bold"}>
              {/* <Image src={Logo} alt="Logo" width={"150"} height={"30"} /> */}
              John & Amaka
            </a>
          </Link>
          <div className="flex md:order-2">
              <Link href={"/booksession"}><button type="button" id="consult2" className="text-white bg-warning hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium xs:hidden rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0">RSVP</button></Link>
              <button data-collapse-toggle="navbar-sticky" onClick={handleMenu} type="button" className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-transaparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200`} aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <i className="bi bi-list text-[20px]"></i>
            </button>
          </div>
          <div className={`items-center justify-between ${menu && "hidden bg-white bg-gray-900 lg:bg-transparent"} md:bg-transparent w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-[40px] md:mt-0 md:border-0">
              <li>
                <Link href="/">
                  <a href="#" className={`block py-2 pl-3 pr-4 ${colorChange && "text-gray-700"} rounded md:bg-transparent md:hover:text-blue-700 md:p-0 ${routers.pathname === "/" && "bg-blue-700 md:bg-transparent md:text-blue-300"}`} aria-current="page">Home</a> 
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a href="#" className={`block py-2 pl-3 pr-4 ${colorChange && "text-gray-700"} text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${routers.pathname === "/about" && "bg-orange-700 md:bg-transparent md:text-orange-600"}`}>About Us</a> 
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a href="#" className={`block py-2 pl-3 pr-4 ${colorChange && "text-gray-700"} text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${routers.pathname === "/events" && "bg-orange-700 md:bg-transparent md:text-orange-600"}`}>Events</a> 
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a href="#" className={`block py-2 pl-3 pr-4 ${colorChange && "text-gray-700"} text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${routers.pathname === "/contact" && "bg-orange-700 md:bg-transparent md:text-orange-600"}`}>Contact</a>
                </Link>
              </li>
              
              <li id="consult1">
                <Link href={"/booksession"}><button type="button" className="text-white bg-warning hover:bg-orange-800 w-full md:hidden focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0">RSVP</button></Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>

    </>
  );
};

export default Navbar;
