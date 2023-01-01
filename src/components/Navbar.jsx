import React from 'react'

import images from '../constants/images'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <div className="navbar__menu-logo">
          <img src={images.Rev1} alt="Logo" />
        </div>
        <ul className="navbar__menu-link">
          <li className="navbar__menu-link">
            <a href="#Learn">Learn</a>
          </li>
          <li className="navbar__menu-link">
            <a href="#About">About</a>
          </li>
          <li className="navbar__menu-link">
            <a href="#Why" Why>
              Why
            </a>
          </li>
        </ul>
        <div className="navbar__menu-btn">
          <button className="nav-btn">Donload</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
