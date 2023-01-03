import React from 'react'


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__menu flex justify-between items-center py-5">
        <div className="navbar__menu-logo">
          <a href="#main" className='text-3xl text-dimBlue font-bold		hover:text-dimPeach transition-colors ease-in-out duration-300'>Cornelia</a>
        </div>
        <ul className="navbar__menu-link flex">
          <li className="navbar__menu-link mx-2 ">
            <a href="#Learn" className='text-dimBlue hover:text-dimPeach font-semibold	 transition-colors ease-in-out duration-300'>Learn</a>
          </li>
          <li className="navbar__menu-link mx-2 ">
            <a href="#About" className='text-dimBlue hover:text-dimPeach font-semibold	 transition-colors ease-in-out duration-300'>About</a>
          </li>
          <li className="navbar__menu-link mx-2 ">
            <a href="#Why" className='text-dimBlue hover:text-dimPeach font-semibold	 transition-colors ease-in-out duration-300' Why>
              Why
            </a>
          </li>
        </ul>
        <div className="navbar__menu-btn">
          <button className="nav-btn transition-colors ease-in-out duration-300 bg-dimBlue hover:bg-dimPeach px-8 py-3 rounded-full text-dimPeach hover:text-dimBlue">Download</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
