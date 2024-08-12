import React from 'react'
import AboutCarousel from '../components/AboutCarousel'
import AboutPara from '../components/AboutPara'
import OurVision from '../components/OurVision'
import OurMission from '../components/OurMission'

const About = () => {
  return (
    <div className='px-10 py-12 bg-gray-300'>
      <AboutCarousel/>
      <AboutPara/>
      <OurVision/>
      <OurMission/>
    </div>
  )
}

export default About