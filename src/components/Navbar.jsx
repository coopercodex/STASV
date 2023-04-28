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

  let btnClassName = Array.from(document.getElementsByClassName('home-button'))

  btnClassName.forEach(btn => {
    btn.addEventListener('click', handleNavbar);
  });


  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className='navbar'>
        <Link to='/' onClick={() => setShowNavbar(false)}><img src={logo} className='logo' /></Link>
        <ul className={showNavbar ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to='/' className="home-button">Home</Link></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li><Link to='/about' className="home-button">About</Link></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li><Link to='/contact' className="home-button">Contact</Link></li>
          <li><Link className="home-button">Specials</Link></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li><Link to='/destinations' className="home-button">Destinations</Link></li>
          {/* <span style={{ fontSize: '30px' }}>|</span> */}
          <li className='last-li'><Link className="home-button">Gallery</Link></li>
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

