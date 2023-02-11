import React from 'react'

import images from '../constants/images'

function Destiny() {
  return (
    <div className="destiny relative">
      <div className="destiny-main h-screen flex justify-center items-center max-ss:h-full">
        <div className='relative z-40'>
          <h2 className='text-8xl text-center mb-5 max-ss:hidden'>Toward infinity <br /> and beyond</h2>
          <h2 className='text-8xl text-center mb-5 hidden max-ss:text-6xl max-ss:block'>Toward infinity and beyond</h2>
          <p className='text-2xl text-center mb-10'>
            Discover your new favourite mascot. With her, boost your imagination
            and decorate your workspace. May Cornelia accompany you in your
            daily life and in the most perilous missions you may encounter.
          </p>
          <p className='text-2xl text-center mb-10'>
            With her, give yourself the means to succeed, believe in yourself
            and in your dreams!
          </p>   
        </div>
        <div className='absolute top-50 z-0'>
            <img src={images.UniCornelia} alt="Unicorns" />
        </div>
      </div>
    </div>
  )
}

export default Destiny
