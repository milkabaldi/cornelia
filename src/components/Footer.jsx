import React from 'react'

function Footer() {
  return (
    <footer className="footer ">
      <div className="w-full flex py-6 justify-between items-center flex-col">
        <h2 className='text-6xl mb-10 text-dimBlue bold'>Get started with Cornelia today</h2>
        <div className="footer__main-btns flex justify-between gap-5">
          <button className='transition-colors ease-in-out duration-300 bg-dimWhite hover:bg-dimBlue px-8 py-3 rounded-full text-dimBlue hover:text-dimPeach border-solid border-2 border-dimBlue hover:border-dimPeach'>Download for Figma</button>
          <button className='transition-colors ease-in-out duration-300 bg-dimWhite hover:bg-dimBlue px-8 py-3 rounded-full text-dimBlue hover:text-dimPeach border-solid border-2 border-dimBlue hover:border-dimPeach'>Download for Sketch</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
