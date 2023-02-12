import React from 'react'

import images from '../constants/images'
function Detail() {
  return (
    <div className="detail">
      <div className="detail__main flex py-32 gap-1 justify-center items-center max-ss:flex-col max-ss:py-0">
        <div className='w-6/12 max-ss:w-full'>
          <img src={images.UniCircles} alt="Detail" />
        </div>
        <div className='w-6/12 max-ss:w-full'>
          <h2 className='text-6xl mb-10 text-dimBlue bold'>Each lesser detail matter</h2>
          <p className='text-2xl  mb-12 text-dimBlue '>
            Cornelia is an all-in-one tool that helps teams design every part of
            the product experience. Download and get to a functional prototype
            faster than ever.
          </p>
          <button className='transition-colors ease-in-out duration-300 bg-dimWhite hover:bg-dimBlue px-8 py-3 rounded-full text-dimBlue hover:text-dimPeach border-solid border-2 border-dimBlue hover:border-dimPeach'>Discover Cornelia</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
