'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  // State to manage navbar visibility in mobile view
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open/close navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Full Navbar with Hamburger icon for screens <= 1024px */}
      <div className="navbar w-full text-white">
        <div className="container relative flex flex-col lg:flex-row justify-between p-5 lg:items-center">
          
          {/* Hamburger Icon (inside the navbar, top-left corner) */}
          <div className="invert absolute top-5 left-5 lg:hidden cursor-pointer" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Brand */}
          <div className="font-bold text-2xl pl-12 lg:pl-0">
            Blooger
          </div>

          {/* Navbar Links */}
          <div className={`flex-col lg:flex-row flex ${isOpen ? 'flex' : 'hidden'} lg:flex lg:gap-12 items-center mt-4 lg:mt-0`}>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-12 text-lg font-bold">
              <Link href="/"><li>Home</li></Link>
              <Link href="/about"><li>About</li></Link>
              <Link href="/news"><li>All News</li></Link>
              <Link href="/contact"><li>Contact</li></Link>
              <Link href="/advertisement"><li>Advertisement</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
