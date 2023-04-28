import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../assets/Sweet tea and sunshine vacations (6).png'
import { ClickAwayListener } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleClickAway = () => {
    setShowNavbar(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='navbar'>
        <a href='/'><img src={logo} className='logo' /></a>
        <ul className={showNavbar ? 'nav-menu active' : 'nav-menu'}>
          <li><a href='/' className="home-button">Home</a></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li><a href='/about' className="home-button">About</a></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li><a href='/contact' className="home-button">Contact</a></li>
          <li><a className="home-button">Specials</a></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li><a href='/destinations' className="home-button">Destinations</a></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li className='last-li'><a className="home-button">Gallery</a></li>
        </ul>
        <div className='hamburger-container'>
          {/* <Link to='/'><img src={logo} className='logo-media' /></Link> */}
          <div className='hamburger' onClick={handleNavbar}>
            {showNavbar ? (<CloseIcon fontSize='large' className='icon' />) : (<MenuIcon fontSize='large' className='icon' />)}
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )
}

