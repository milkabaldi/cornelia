import React from 'react'
import images from '../constants/images'

const About = () => {
  return (
    <div className='about'>
      <div className="about__main relative bottom-20 h-screen flex items-center justify-center">
        <h2 className='about__main-title text-dimPeach text-9xl text-center relative z-40'>Cornelia <br /> is the new <br /> <b className='about__main-color text-dimBlue text-bold' >black</b></h2>
        <div className='absolute bottom-0 z-10'>
        <img  src={images.UniProduct} alt="Unicorn Heroes" />  
        </div>
        
      </div>
    </div>
  )
}

export default About