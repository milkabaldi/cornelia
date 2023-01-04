import React from 'react'

import images from '../constants/images'

const Personality = () => {
  return (
    <div>
      <h2>Choose your destiny</h2>
      <p>
        Each unicorn has its own personality and symbolism. Get to know your new
        mascot and surround yourself with a strong ally. Thus choose the brave
        one and you will be able to face any situation. Take the sweet Cornelia
        and protect your health. If you need more luck, meet the Magic Cornelia!
        If you’re born to be bold, choose the Impetuous Cornelia : nothing will
        defeat you.
      </p>
      <button>Learn more about her story</button>
      <img src={images.UnisShadow} alt="Unicorn Shadow" />
    </div>
  )
}

export default Personality
