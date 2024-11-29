import Image from 'next/image'
import React from 'react'

const hero = () => {
    return (
        // main div
        <div className='flex max-md:flex-col lg:px-16 px-4 gap-20  overflow-hidden sm:items-center md:items-start'>

            {/* left text div */}

            <div className='flex flex-col lg:gap-5 gap-5 max-sm:gap-6 items-start m-0'>
                <h1 className='lg:text-[60px] text-[50px] max-sm:text-[43px]  font-[500] lg:w-[531px] w-[500px] max-sm:w-[370px]  lg:leading-[70.56px] leading-[60.56px] '>
                    Navigating the digital landscape for success
                </h1>

                {/* image for small scr */}
                
                <Image className='max-sm:w-[429px] h-[310px] sm:hidden'
                    src="/hero.png"
                    alt='hero_img'
                    width={600}
                    height={515}
                />
                <p className='w-[498px] max-sm:w-[345px] h-[112px] lg:text-[20px] text-[16px] font-[400] leading-[25px] text-[#303030]'>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <button className='w-56 max-sm:w-[340px]  h-16 rounded-xl bg-[#191A23] text-white lg:hover:text-lg transition-all duration-150 ease-out hover:ease-in '>Book a consultation</button>
            </div>

            {/* right image div  larg scr*/}

            <div className='sm:block hidden'>
                <Image className='max-sm:w-[400px] max-sm:h-[310px]'
                    src="/hero.png"
                    alt='hero_img'
                    width={600}
                    height={515}
                />
            </div>
        </div>
    )
}

export default hero
