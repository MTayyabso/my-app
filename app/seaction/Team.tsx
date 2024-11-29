import Image from 'next/image'
import React from 'react'

const Team = () => {
    const teamCard = [
        {
            img : '/John-Smiths.png',
            title : 'John Smith',
            title_line : 'CEO and Founder',
            paragraph : '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
        },
        {
            img : '/Jane-Doe.png',
            title : 'Jane Doe',
            title_line : 'Director of Operations',
            paragraph : '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
        },
        {
            img : '/Michael-Brown.png',
            title : 'Michael Brown',
            title_line : 'Senior SEO Specialist',
            paragraph : '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
        },
        {
            img : '/Michael-Brown.png',
            title : 'Emily Johnson',
            title_line : 'PPC Manager',
            paragraph : '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
        },
        {
            img : '/Brian-Williams.png',
            title : 'Brian Williams',
            title_line : 'Social Media Specialist',
            paragraph : '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
        },
        {
            img : '/Sarah-Kim.png',
            title : 'Sarah Kim',
            title_line : 'Content Creator',
            paragraph :' 2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
        },
    ]
  return (
    <div className='lg:px-16 px-4'>
        {/* Team */}
         <div className='flex max-md:flex-col max-md:items-center sm:gap-10 gap-8  lg:py-14 py-8 mt-8'>
        <h2 className='w-[115px] max-sm:w-[105px] h-[51px] max-sm:h-[46px] font-[500] text-[40px] bg-[#B9FF66] flex justify-center items-center'>
        Team
        </h2>
        <p className='w-[473px] max-sm:w-[390px] h-[46px] max-sm:h-[72px] font-[400] text-[18px] max-sm:text-[16px] px-4 max-sm:text-center'>
        Meet the skilled and experienced team behind our successful digital marketing strategies

        </p>
      </div>
      {/* Team_cards */}
      <div className='flex max-md:flex-col flex-wrap gap-7 max-lg:justify-between   lg:justify-between max-md:items-center'>

  

      {
        teamCard.map((items)=>(
            <div className='w-[387px] h-[310px] max-sm:w-[350px] max-sm:h-[294px] border-x-[1px] border-t-[1px] border-b-[5px] border-black rounded-[45px] p-10 space-y-6'>
            <div className='flex justify-between '>
                <Image className='rounded-[25px]'
                width={105}
                height={102}
                alt='JhonSmith'
                src={items.img}
                />
                <div className='flex flex-col justify-end'>
                    <h4 className='text-[20px] max-sm:text-[18px] font-[500]'>{items.title}</h4>
                    <p className='text-[18px] max-sm:text-[16px] font-[400]'>{items.title_line}</p>
                </div>
                <div>
                    <Image
                    width={34}
                    height={34}
                    alt='in-image'
                    src='/linked-in-cards.png'
                    />
                    </div>
            </div>
            <div className="border-t border-black my-4"></div>
            <div className='w-[317px] h-[69px] max-sm:w-[290] max-sm:h-[72px]'>
           <p >
          {items.paragraph}
           </p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Team
