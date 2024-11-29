'use client'
import React, { useState } from 'react'

const WorkingProcess = () => {
  const cardComponent = [
    {
      num: '01',
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      num: '02',
      title: 'Research and Strategy Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum maxime ducimus accusantium officiis dolores eos odit sed, quia sint cum animi distinctio, quae suscipit eligendi quisquam ipsam amet molestias.'
    },
    {
      num: '03',
      title: 'Implementation',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum maxime ducimus accusantium officiis dolores eos odit sed, quia sint cum animi distinctio, quae suscipit eligendi quisquam ipsam amet molestias.'
    },
    {
      num: '04',
      title: 'Monitoring and Optimization',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum maxime ducimus accusantium officiis dolores eos odit sed, quia sint cum animi distinctio, quae suscipit eligendi quisquam ipsam amet molestias.'
    },
    {
      num: '05',
      title: 'Reporting and Communication',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum maxime ducimus accusantium officiis dolores eos odit sed, quia sint cum animi distinctio, quae suscipit eligendi quisquam ipsam amet molestias.'
    },
    {
      num: '06',
      title: 'Continual Improvement',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum maxime ducimus accusantium officiis dolores eos odit sed, quia sint cum animi distinctio, quae suscipit eligendi quisquam ipsam amet molestias.'
    },
  ];

  return (
    <div>
      <div className='flex max-md:flex-col max-md:items-center sm:gap-10 gap-8 lg:px-16 px-4 lg:py-14 py-8 mt-8'>
        <h2 className='w-[412px] max-sm:w-[226px] h-[51px] max-sm:h-[91px] font-[500] text-[40px] max-sm:text-[30px] bg-[#B9FF66] flex justify-center items-center max-sm:text-center '>
          Our Working Process
        </h2>
        <p className='w-[292px] max-sm:w-[390px] h-[46px] max-sm:h-[48px] font-[400] text-[18px] max-sm:text-[16px] px-4 max-sm:text-center'>
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      {/* Cards */}
      {cardComponent.map((item, index) => (
        <Card 
          key={index}
          num={item.num}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

const Card = ({ num, title, description }:{num:string,title:string,description:string}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:px-16 px-4 ">
      <div
        className={
          isOpen
            ? "bg-[#B9FF66] shadow-md max-sm:px-8 px-14 py-7 max-sm:py-5 relative rounded-[45px] border-x-[1px] border-t-[1px] border-b-[6px] border-black mt-5"
            : "bg-[#F3F3F3] shadow-md max-sm:px-8 px-14 py-7 max-sm:py-5 relative rounded-[45px] border-x-[1px] border-t-[1px] border-b-[6px] border-black mt-5"
        }
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 max-sm:space-x-7">
            <span className="text-[60px] max-sm:text-[30px] font-[500] text-black">{num}</span>
            <h3 className="text-[30px] max-sm:text-[18px] font-[500] text-black">{title}</h3>
          </div>
          {/* Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 max-sm:w-7 max-sm:h-7 text-[30px] max-sm:text-[20px] flex items-center justify-center bg-[#F3F3F3] border-[1px] border-black rounded-full shadow-md text-black font-bold pb-1"
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
        {/* Expandable Content */}
        {isOpen && (
          <>
            <div className="border-t border-black my-4"></div>
            <p className="text-sm text-black w-full sm:mt-10">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkingProcess;
