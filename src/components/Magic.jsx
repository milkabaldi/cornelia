import React from 'react'
import images from '../constants/images'

function Magic() {
  return (
    <section className="magic">
      <div className="magic__main">
        <h2>Let the magic happen</h2>
        <p>
          Surround yourself with the most faithful companions and embark
          together on fantastic new adventures! Pocket, medium or XXL format,
          find the Cornelia that best suits your environment.
        </p>
        <p>
          <b>Oh, and don't worry:</b> Cornelia feeds on your bad vibes, no need
          to give her water or grass !
        </p>
        <img src={images.Unis} alt="Unicorns" />
      </div>
    </section>
  )
}

export default Magic
