import React from 'react'

import images from '../constants/images'

export default function Premium() {
  return (
    <div className="premium">
      <div className="premium__main">
        <div className="premium__main-block">
          <div>
            <img src={images.UniCircleFrame} alt="Unicorn Circle Frame" />
          </div>
          <div>
            <h2>Always Go futher</h2>
            <p>
              Decline Cornelia as you wish! Black, dark grey, white, light grey,
              prussian blue ... Choose your colour, size and characteristics!
              And if that's not enough, personalise it to make it unique, in
              your own image. So open up the field of possibilities, the world
              is yours !
            </p>
            <span>SCROLL TO KNOW MORE</span>
          </div>
        </div>
        <div className="premium__main-block">
          <div>
            <h2>Premium 3D Quality</h2>
            <p>
              Now the difference between a unicorn and a pegasus is quite clear
              a unicorn has a horn which usually stores their magically powers
              while a pegasus can only fly with its gorgeous wings. Now the
              difference between a unicorn and a pegasus is quite clear a
              unicorn has a horn.
            </p>
          </div>
          <div>
            <img
              src={images.UniCircleGreenFrame}
              alt="Unicorn Circle Green Frame"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
