import React from 'react'
import images from '../constants/images'

function Unicorns() {
  return (
    <section className='appstore'>
      <div className='appstore__main flex py-32 gap-1 justify-center items-center'>
        <div className="appstore__main-block w-6/12">

          <div className='mb-5 flex justify-center items-center'>
          <img  src={images.LogoAppStore} alt="App Store" />
          </div>
          
          <h2 className='text-6xl mb-10 text-dimBlue bold'>Unicorns exist</h2>
          <p className='text-2xl  mb-12 text-dimBlue'>Download our appliaction on the AppStore or the 3D model of Cornelia and meet your new mascot ! Take some cool pictures of her and share it on Instagram, Twitter and Facebook with <b>#CorneliaTheUnicorn</b> !</p>
          <button>Meet Cornelia in VR</button>
        </div>
        <div className="appstore__main-block w-6/12">
          <img src={images.FrameUni} alt="Frame Unicorns" />
        </div>
      </div>
    </section>
  )
}

export default Unicorns