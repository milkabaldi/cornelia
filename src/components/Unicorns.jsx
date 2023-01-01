import React from 'react'
import images from '../constants/images'

function Unicorns() {
  return (
    <section className='appstore'>
      <div className='appstore__main'>
        <div className="appstore__main-block">
          <h2>Unicorns exist</h2>
          <p>Download our appliaction on the AppStore or the 3D model of Cornelia and meet your new mascot ! Take some cool pictures of her and share it on Instagram, Twitter and Facebook with <b>#CorneliaTheUnicorn</b> !</p>
          <button>Meet Cornelia in VR</button>
        </div>
        <div className="appstore__main-block">
          <img src={images.FrameUni} alt="Frame Unicorns" />
        </div>
      </div>
    </section>
  )
}

export default Unicorns