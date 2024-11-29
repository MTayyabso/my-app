'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineCancel } from 'react-icons/md';

const Header = () => {
  const [clOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center lg:px-16 px-4 lg:py-10 py-8 justify-between">
        {/* Logo */}
        <div>
          <Image
            className="max-lg:w-[170px]"
            src="/logo_header.png"
            width={219}
            height={36}
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex lg:gap-8 gap-5 items-center max-md:hidden">
          <ul className="flex lg:gap-8 gap-5 items-center text-[#000000] hover:cursor-pointer">
            <li className="relative group">
              About us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <button className="border-[1px] border-black lg:w-56 w-40 lg:h-16 h-14 rounded-xl hover:bg-[#191A23] hover:text-white lg:hover:text-lg transition-all duration-150 ease-out hover:ease-in">
            Request a quote
          </button>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden hover:cursor-pointer"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {clOpen ? (
            <MdOutlineCancel className="w-10 h-10 hover:text-red-600 transition-all duration-200" />
          ) : (
            <GiHamburgerMenu className="w-10 h-10" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {clOpen && (
        <div className="flex gap-5 items-start flex-col md:hidden p-5 border-y-2 border-gray-200 z-auto absolute bg-white w-full">
          <ul className="flex flex-col gap-3 text-[#000000] hover:cursor-pointer w-full">
            <li className="relative group">
              About us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-20"></span>
            </li>
          </ul>
          <button className="border-[1px] border-black lg:w-56 w-40 lg:h-16 h-14 rounded-xl hover:bg-[#191A23] hover:text-white transition duration-150 ease-out hover:ease-in">
            Request a quote
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
