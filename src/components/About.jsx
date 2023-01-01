import React from 'react'
import images from '../constants/images'

const About = () => {
  return (
    <div className='about'>
      <div className="about__main">
        <h2 className='about__main-title'>Cornelia is the new <b className='about__main-color'>black</b></h2>
        <img src={images.UniProduct} alt="Unicorn Heroes" />
      </div>
    </div>
  )
}

export default About