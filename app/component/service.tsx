import React from 'react'
import Lable from './lable'
import Card from '../seaction/bStarCard'
import Cards from '../seaction/Cards'
const service = () => {
  return (
    <main>
      <Lable/>
      <div className='flex max-md:flex-col max-md:items-center sm:gap-10 gap-8 lg:px-16 px-4 lg:py-14 py-8 mt-8'>
        <h2 className='w-[178px] max-sm:w-[161px] h-[51px] max-sm:h-[46px] font-[500] text-[40px] bg-[#B9FF66] flex justify-center items-center'>
        Services
        </h2>
        <p className='w-[580px] max-sm:w-[390px] h-[46px] max-sm:h-[72px] font-[400] text-[18px] max-sm:text-[16px] px-4 max-sm:text-center'>
        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:

        </p>
      </div>
      <Cards/>
      <Card/>
    </main>
  )
}

export default service
