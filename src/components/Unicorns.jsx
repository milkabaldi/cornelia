import React from 'react'
import images from '../constants/images'

function Unicorns() {
  return (
    <section className='appstore'>
      <div className='appstore__main flex py-32 gap-1 justify-center items-center max-ss:flex-col'>
        <div className="appstore__main-block w-6/12 max-ss:w-full">

          <div className='mb-5 flex justify-center items-center'>
          <img  src={images.LogoAppStore} alt="App Store" />
          </div>
          
          <h2 className='text-6xl mb-10 text-dimBlue bold'>Unicorns exist</h2>
          <p className='text-2xl  mb-12 text-dimBlue'>Download our appliaction on the AppStore or the 3D model of Cornelia and meet your new mascot ! Take some cool pictures of her and share it on Instagram, Twitter and Facebook with <b>#CorneliaTheUnicorn</b> !</p>
          <button className='transition-colors ease-in-out duration-300 bg-dimWhite hover:bg-dimBlue px-8 py-3 rounded-full text-dimBlue hover:text-dimPeach border-solid border-2 border-dimBlue hover:border-dimPeach'>Meet Cornelia in VR</button>
        </div>
        <div className="appstore__main-block w-6/12 max-ss:w-full">
          <img src={images.FrameUni} alt="Frame Unicorns" />
        </div>
      </div>
    </section>
  )
}

export default Unicorns