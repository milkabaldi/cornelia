import React from 'react'

import images from '../constants/images'

export default function Premium() {
  return (
    <div className="premium">
      <div className="premium__main">
        <div className="premium__main-block flex-row flex justify-between items-center max-ss:flex-col">
          <div className='w-6/12 max-ss:w-full'>
            <img className='max-ss:max-w-xs' src={images.UniCircleFrame} alt="Unicorn Circle Frame" />
          </div>
          <div className='w-6/12 max-ss:w-full'>
            <h2 className='text-6xl mb-12 text-dimPeach'>Always <br /> Go futher</h2>
            <p className='text-2xl  mb-12 text-dimBlue max-w-md'>
              Decline Cornelia as you wish! Black, dark grey, white, light grey,
              prussian blue ... Choose your colour, size and characteristics!
              And if that's not enough, personalise it to make it unique, in
              your own image. So open up the field of possibilities, the world
              is yours !
            </p>
            <span className='text-1xl block  mb-12 text-dimBlue '>SCROLL TO KNOW MORE</span>
          </div>
        </div>
        <div className="premium__main-block flex flex-row justify-center items-center max-ss:flex-col">
          <div className='w-6/12 max-ss:w-full'>
            <h2 className='text-6xl mb-12 text-dimBlue'>Premium <br /> 3D Quality</h2>
            <p className='text-2xl  mb-12 text-dimBlue max-w-md'>
              Now the difference between a unicorn and a pegasus is quite clear
              a unicorn has a horn which usually stores their magically powers
              while a pegasus can only fly with its gorgeous wings. Now the
              difference between a unicorn and a pegasus is quite clear a
              unicorn has a horn.
            </p>
          </div>
          <div className='w-6/12 max-ss:w-full'>
            <img
              className='max-ss:max-w-xs'
              src={images.UniCircleGreenFrame}
              alt="Unicorn Circle Green Frame"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
