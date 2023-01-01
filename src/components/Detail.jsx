import React from 'react'

import images from '../constants/images'
function Detail() {
  return (
    <div className="detail">
      <div className="detail__main">
        <div>
          <img src={images.UniCircles} alt="Detail" />
        </div>
        <div>
          <h2>Each lesser detail matter</h2>
          <p>
            Cornelia is an all-in-one tool that helps teams design every part of
            the product experience. Download and get to a functional prototype
            faster than ever.
          </p>
          <button>Discover Cornelia</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
