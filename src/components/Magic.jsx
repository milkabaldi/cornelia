import React from 'react'
import images from '../constants/images'

function Magic() {
  return (
    <section className="magic pt-32 max-ss:pt-10">
      <div className="magic__main flex items-center justify-center flex-col	">
        <h2 className='text-6xl text-center mb-12 text-dimPeach'>Let the magic happen</h2>
        <p className='text-2xl text-center mb-12 text-dimBlue '>
          Surround yourself with the most faithful companions and embark
          together on fantastic new adventures! Pocket, medium or XXL format,
          find the Cornelia that best suits your environment.
        </p>
        <p className='text-2xl text-center mb-12 text-dimBlue '>
          <b>Oh, and don't worry:</b> Cornelia feeds on your bad vibes, no need
          to give her water or grass !
        </p>
        <img className='w-full absolute left-0 bottom-0' src={images.Unis} alt="Unicorns" />
      </div>
    </section>
  )
}

export default Magic
