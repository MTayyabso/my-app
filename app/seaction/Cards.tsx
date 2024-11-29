import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cards = () => {
  const cardss = [
    {
      title: 'Search engine',
      title2: 'optimization',
      arrow_img: '/Icon.png',
      text: 'Learn more',
      img: '/services1.png',
      title_bg: '#B9FF66',
      bg: '#F3F3F3',
    },
    {
      title: 'Pay-per-click',
      title2: 'advertising',
      arrow_img: '/Icon.png',
      text: 'Learn more',
      img: '/service2.png',
      title_bg: '#FFFFFF',
      bg: '#B9FF66',
    },
    {
      title: 'Social Media',
      title2: 'Marketing',
      arrow_img: '/Icon-arrow.png',
      text: 'Learn more',
      img: '/service3.png',
      title_bg: '#FFFFFF',
      bg: '#191A23',
      color : '#FFFFFF'
    },
    {
      title: 'Email',
      title2: 'Marketing',
      arrow_img: '/Icon.png',
      text: 'Learn more',
      img: '/servyce4.png',
      title_bg: '#B9FF66',
      bg: '#F3F3F3',
    },
    {
      title: 'Content',
      title2: 'Creation',
      arrow_img: '/Icon.png',
      text: 'Learn more',
      img: '/service5.png',
      title_bg: '#FFFFFF',
      bg: '#B9FF66',
    },
    {
      title: 'Analytics and ',
      title2: 'Tracking',
      arrow_img: '/Icon-arrow.png',
      text: 'Learn more',
      img: '/service6.png',
      title_bg: '#B9FF66',
      bg: '#191A23',
       color : '#FFFFFF'
    },
  ];

  return (
    <div className="lg:px-16 px-4 flex max-md:flex-col flex-wrap  max-lg:justify-between   lg:justify-between max-md:items-center mt-6">
      {cardss.map((card, index) => (
        <div
          key={index}
          style={{ backgroundColor: card.bg }}
          className="flex justify-between sm:w-[600px] sm:h-[310px] w-[345px] h-[330px] border-x-[1px] border-t-[1px] border-b-[5px] border-black rounded-[45px] p-10 overflow-hidden mb-8"
        >
          {/* Left Section */}
          <div className="sm:space-y-24">
            <div>
              <h3
                style={{ backgroundColor: card.title_bg }}
                className="sm:w-[221px] sm:h-[38px] leading-8 w-[194px] h-[33px] text-[26px] font-[500] sm:text-[30px] rounded-[7px] px-2"
              >
                {card.title}
              </h3>
              <h3
                style={{ backgroundColor: card.title_bg }}
                className="sm:w-[200px] sm:h-[38px] leading-8 w-[172px] h-[33px] text-[26px] font-[500] sm:text-[30px] rounded-[7px] px-2"
              >
                {card.title2}
              </h3>
            </div>

            <div className="w-full ml-28 pt-3 sm:hidden">
              <Image width={165} height={129} alt="image" src={card.img} />
            </div>

            <div className="flex gap-4 items-center">
              <Link href="/">
                <Image width={41} height={41} alt="arrow" src={card.arrow_img} />
              </Link>
              <p 
              style={{color : card.color}}
              className="text-[20px] font-[400] max-sm:hidden">{card.text}</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center max-sm:hidden">
            <Image
              className="max-sm:w-[200px] max-sm:h-[129px]"
              width={210}
              height={170}
              alt="image"
              src={card.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
