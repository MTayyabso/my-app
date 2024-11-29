import Image from 'next/image'
import React from 'react'

const bStarCard = () => {
  return (
    // main div
    <div className='lg:px-16 px-4 pt-16'>

  
    <div className='flex justify-center  lg:px-16 px-4 md:justify-between bg-[#F3F3F3] rounded-[45px] h-[347px]  '>
        {/* left side html */}
      <div className='flex flex-col justify-center gap-5'>
        <h3 className='sm:w-[500px] w-[290px]  sm:h-[38px] h-[66px] font-[500] sm:text-[30px] text-[26px]'>
        Let’s make things happen
        </h3>
        <p className='sm:w-[480px] w-[290px] sm:h-[69px] h-[96px] font-[400] sm:text-[18px] text-[16px] sm:leading-[22px] leading-[24px]'>
        Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
        </p>
        <button className='w-56 max-sm:w-64  h-16 rounded-xl bg-[#191A23] text-white lg:hover:text-lg transition-all duration-150 ease-out hover:ease-in '>Get your free proposal</button>

      </div>
      {/* right side img */}
      <div className='md:block hidden pr-16'>
<Image className='mt-[-20px] max-lg:h-[394px] lg:h-[394px]'
width={359}
height={394}
alt='/'
src='/star-bomb.png'

/>
      </div>
    </div>
    </div>
  )
}

export default bStarCard
