
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineCancel } from 'react-icons/md';
const Footer = () => {
    const [clOpen, setIsOpen] = useState(false);
  return (
    <div className='lg:px-16 px-4 mt-36'>


    <div className='bg-[#191A23] rounded-t-[45px] flex flex-col '>
       <div>
      <nav className="flex items-center lg:px-12 px-5 lg:py-10 py-8 justify-between">
        {/* Logo */}
        <div>
          <Image
            className="max-lg:w-[170px]"
            src="/Logo.png"
            width={219}
            height={36}
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex lg:gap-8 gap-5 items-center max-md:hidden">
          <ul className="flex lg:gap-8 gap-5 items-center text-[#f4efef] hover:cursor-pointer">
            <li className="relative group">
              About us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <div className='flex gap-5 hover:cursor-pointer'>
            <Image 
             width={30}
             height={30}
             alt='linked_in'
             src='/linked_in.png'
             />
             <Image 
             width={30}
             height={30}
             alt='facebook'
             src='/facebook.png'
             />
             <Image 
             width={30}
             height={30}
             alt='twiter'
             src='/twiter.png'
             />
         </div>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden hover:cursor-pointer"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {clOpen ? (
            <MdOutlineCancel className="w-10 h-10 text-white hover:text-red-600 transition-all duration-200" />
          ) : (
            <GiHamburgerMenu className="w-10 h-10 text-white" />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {clOpen && (
        <div className="flex gap-5 items-start flex-col md:hidden p-5 border-y-2 border-gray-200 z-auto absolute  w-[91.5%] bg-[#191A23]">
          <ul className="flex flex-col gap-3 text-[#00[#f4efef] hover:cursor-pointer w-full text-white">
            <li className="relative group">
              About us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Use Cases
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-20"></span>
            </li>
            <li className="relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f4efef] transition-all duration-300 group-hover:w-20"></span>
            </li>
          </ul>
         <div className='flex gap-5 hover:cursor-pointer '>
            <Image 
             width={30}
             height={30}
             alt='linked_in'
             src='/linked_in.png'
             />
             <Image 
             width={30}
             height={30}
             alt='facebook'
             src='/facebook.png'
             />
             <Image 
             width={30}
             height={30}
             alt='twiter'
             src='/twiter.png'
             />
         </div>
        </div>
      )}
    </div>
    {/* second */}
    <div className="flex flex-col max-sm:flex-col lg:flex-row justify-between lg:px-12 px-5 w-full mt-5 gap-5 max-lg:items-center">
  {/* Contact Info Section */}
  <div className="sm:w-[332px] sm:h-auto w-full flex flex-col gap-5 max-lg:items-center">
    {/* Contact Header */}
    <p className="text-[20px] font-medium flex items-center justify-center bg-[#B9FF66] w-[126px] h-[26px] rounded-[7px]">
      Contact us:
    </p>

    {/* Email */}
    <Link href="/">
      <p className="text-[18px] max-sm:text-[16px] font-normal text-white">
        Email: info@positivus.com
      </p>
    </Link>

    {/* Phone */}
    <Link href="/">
      <p className="text-[18px] max-sm:text-[16px] font-normal text-white">
        Phone: 555-567-8901
      </p>
    </Link>

    {/* Address */}
    <Link href="/">
      <p className="text-[18px] max-sm:text-[16px] font-normal text-white">
        Address: 1234 Main St
        <br />
        Moonstone City, Stardust State 12345
      </p>
    </Link>
  </div>

  {/* Subscribe Section */}
  <div className="sm:w-[560px] w-full h-auto bg-[#292A32] rounded-[14px] p-6 flex flex-col sm:flex-row gap-5 items-center ">
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required
      className="p-3 block placeholder:pl-5 w-full sm:w-[285px] sm:h-[66px] max-sm:w-full max-sm:h-[50px] rounded-[14px] border border-white bg-[#292A32] text-white focus:ring-indigo-500 focus:border-indigo-500"
    />
    <button className="w-full sm:w-[249px] h-[68px] max-sm:h-[50px] rounded-[14px] bg-[#B9FF66] text-black">
      Subscribe to news
    </button>
  </div>
</div>
<div className='lg:px-12 px-5'>

<div className="border-t border-white my-4 "></div>
</div>
<div className='text-white flex gap-10  lg:px-12 px-5 py-8'>
 <p>© 2023 Positivus. All Rights Reserved.</p>
 <p className='cursor-pointer underline'><a>Privacy Policy</a></p>
</div>
    </div>
    </div>
  )
}

export default Footer
