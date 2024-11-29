'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [option, setOption] = useState('Say Hi');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    alert('Message Sent Successfully!');
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex lg:px-16 px-4 py-12 max-md:flex-col max-md:items-center sm:gap-10 gap-8 lg:py-14 mt-8">
        <h2 className="w-[256px] max-sm:w-[140px] h-[51px] max-sm:h-[46px] font-[500] text-[40px] sm:text-[33px] lg:text-[40px] bg-[#B9FF66] flex justify-center items-center">
          Case Studies
        </h2>
        <p className="w-[580px] max-sm:w-[390px] h-[46px] max-sm:h-[72px] font-[400] text-[18px] max-sm:text-[16px] px-4 max-sm:text-center">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center min-h-screen lg:px-16 px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start overflow-hidden py-4 px-8 max-sm:px-0 bg-gray-100 rounded-[45px] shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
          {/* Left Section - Form */}
          <div className="w-full lg:w-1/2 p-6 lg:p-12">
            {/* Radio Buttons */}
            <div className="flex items-center mb-6 space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactOption"
                  value="Say Hi"
                  checked={option === 'Say Hi'}
                  onChange={() => setOption('Say Hi')}
                  className="mr-2"
                />
                <span>Say Hi</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="contactOption"
                  value="Get a Quote"
                  checked={option === 'Get a Quote'}
                  onChange={() => setOption('Get a Quote')}
                  className="mr-2"
                />
                <span>Get a Quote</span>
              </label>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Name"
                  className="mt-1 p-2 block w-[556px] h-[59px] max-sm:w-[300px] max-sm:h-[60px] rounded-[14px] border-[1px] border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email<span className="text-black">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email address',
                    },
                  })}
                  placeholder="Email"
                  className="mt-1 p-2 block w-[556px] h-[59px] max-sm:w-[300px] max-sm:h-[60px] rounded-[14px] border-[1px] border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message<span className="text-black">*</span>
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Message"
                  rows={4}
                  className="mt-1 p-2 block w-[556px] h-[190px] max-sm:w-[300px] max-sm:h-[132px] rounded-[14px] border-[1px] border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-black text-white py-2 px-4 hover:bg-gray-800 focus:outline-none w-[556px] h-[59px] max-sm:w-[300px] max-sm:h-[60px] rounded-[14px]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <div className="relative max-lg:hidden w-[691px] h-[648px] lg:w-1/2 flex justify-center items-center">
            {/* Background Decoration */}
            <Image
              src="/Mask-group.png"
              alt="Background Decoration"
              width={691}
              height={648}
              className="ml-[580px] w-full h-[85%]"
              priority
            />

            {/* Smaller Decorations */}
            <Image
              src="/Vector2.png"
              alt="Decoration"
              width={178}
              height={178}
              className="absolute top-[23%] left-[55%]"
            />
            <Image
              src="/Vector1.png"
              alt="Decoration"
              width={100}
              height={100}
              className="absolute bottom-[15%] left-[50%]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
