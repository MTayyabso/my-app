import Image from 'next/image';
import React from 'react';

const CaseStudies = () => {
    const caseCards = [
        {
            description: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
            words: 'Learn more',
            img: '/icon.png',
            line: 'w-[2px] h-44 bg-[#cfcaca] absolute right-[-15px]',
        },
        {
            description: 'For a B2B software company, we developed an SEO strategy that resulted in a first-page ranking for key keywords and a 200% increase in organic traffic.',
            words: 'Learn more',
            img: '/icon.png',
            line: 'w-[2px] h-44  bg-[#cfcaca] absolute right-[-15px]',
        },
        {
            description: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
            words: 'Learn more',
            img: '/icon.png',
            line: '',
        },
    ];

    return (
        <div className="lg:px-16 px-4 py-8">
            {/* Header Section */}
            <div className='flex max-md:flex-col max-md:items-center sm:gap-10 gap-8   lg:py-14 py-8 mt-8'>
<h2 className='w-[256px] max-sm:w-[140x] h-[51px] max-sm:h-[46px] font-[500] text-[40px] sm:text-[30px] lg:text-[40px] bg-[#B9FF66] flex justify-center items-center'>
    Case Studies
</h2>
<p className='w-[580px] max-sm:w-[390px] h-[46px] max-sm:h-[72px] font-[400] text-[18px] max-sm:text-[16px] px-4 max-sm:text-center'>
    Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies

</p>
</div>

            {/* Cards Section */}
            <div className="bg-[#191A23] rounded-[45px] p-8 lg:p-16 flex flex-col md:flex-row justify-center items-center gap-10">
                {caseCards.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start justify-start w-full md:w-[350px] relative"
                    >
                        {/* Description */}
                        <p className="text-white text-[16px] lg:text-[18px] font-normal mb-4 leading-relaxed">
                            {item.description}
                        </p>

                        {/* Learn More Section */}
                        <div className="flex items-center gap-2">
                            <p className="text-[#B9FF66] text-[18px] lg:text-[20px] font-medium">
                                {item.words}
                            </p>
                            <Image
                                width={30}
                                height={20}
                                alt="arrow"
                                src={item.img}
                            />
                        </div>

                        {/* Divider Line */}
                        {item.line && (
                            <div className={`${item.line} max-md:hidden`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
