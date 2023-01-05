import React from 'react'

import images from '../constants/images'

const Personality = () => {
  return (
    <div className="flex py-32 relative">
      <div className="w-6/12">
        <h2 className="text-6xl mb-10 text-dimPeach bold">
          Choose <br /> your destiny
        </h2>
        <p className="text-2xl  mb-12 text-dimPeach max-w-md	">
          Each unicorn has its own personality and symbolism. Get to know your
          new mascot and surround yourself with a strong ally. Thus choose the
          brave one and you will be able to face any situation. Take the sweet
          Cornelia and protect your health. If you need more luck, meet the
          Magic Cornelia! If you’re born to be bold, choose the Impetuous
          Cornelia : nothing will defeat you.
        </p>
        <button className="nav-btn transition-colors ease-in-out duration-300 bg-dimBlue hover:bg-dimPeach px-8 py-3 rounded-full text-dimPeach hover:text-dimBlue border-solid border-2 border-dimWhite">
          Learn more about her story
        </button>
      </div>

      <div className="w-6/12 absolute right-0 bottom-0">
        <img className="max-w-3xl	" src={images.UnisShadow} alt="Unicorn Shadow" />
      </div>
    </div>
  )
}

export default Personality
