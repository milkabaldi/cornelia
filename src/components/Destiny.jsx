import React from 'react'

import images from '../constants/images'

function Destiny() {
  return (
    <div className="destiny">
      <div className="destiny-main">
        <div>
          <h2>Toward infinity and beyond</h2>
          <p>
            Discover your new favourite mascot. With her, boost your imagination
            and decorate your workspace. May Cornelia accompany you in your
            daily life and in the most perilous missions you may encounter.
          </p>
          <p>
            With her, give yourself the means to succeed, believe in yourself
            and in your dreams!
          </p>
          <img src={images.UniCornelia} alt="Unicorns" />
        </div>
        <h2>Choose your destiny</h2>
        <p>
          Each unicorn has its own personality and symbolism. Get to know your
          new mascot and surround yourself with a strong ally. Thus choose the
          brave one and you will be able to face any situation. Take the sweet
          Cornelia and protect your health. If you need more luck, meet the
          Magic Cornelia! If you’re born to be bold, choose the Impetuous
          Cornelia : nothing will defeat you.
        </p>
        <button>Learn more about her story</button>
        <img src={images.UnisShadow} alt="Unicorn Shadow" />
      </div>
    </div>
  )
}

export default Destiny
