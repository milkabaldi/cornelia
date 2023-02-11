import React from 'react'
import images from '../constants/images'
import { slideIn, staggerContainer, textVariant } from '../utils/motion';


const About = () => {
  return (
    <div className='about'>
      <div className="about__main relative bottom-0 h-screen flex items-center justify-center max-ss:h-2/3">
        <h2 className='about__main-title text-dimPeach text-9xl text-center relative z-40 max-ss:text-7xl'>Cornelia <br /> is the new <br /> <b className='about__main-color text-dimBlue text-bold' >black</b></h2>
        <div className='absolute bottom-0 z-10'>
        <img  src={images.UniProduct} alt="Unicorn Heroes" />  
        </div>
        
      </div>
    </div>
  )
}

export default About