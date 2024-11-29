import React from 'react'
import Hero from './seaction/hero'
import Service from './component/service'
import CaseStudies from './seaction/CaseStudies'
import WorkingProcess from './component/workingProcess'
import ContactUs from './seaction/ContactUs'
import Team from './seaction/Team'
import Slider from './seaction/Slider'
const page = () => {
  return (
    <main>
     <Hero/>
     <Service/> 
     <CaseStudies/>
     <WorkingProcess/>
     <Team/>
     {/* <Slider/> */}
     <ContactUs/>
    </main>
  )
}

export default page
