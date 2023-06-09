import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './footer.css'
import evoLogo from '../assets/1681324327187blob.jpg'
import archerLogo from '../assets/1681772822800blob.jpg'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div className='phone'>
              <h3>Marion, SC 29571</h3>
            </div>
          </div>
          <div className='phone'>
            <h3><FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />1-805-708-3851</h3>
          </div>
          <div className='phone'>
            <h3><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
              <a href="mailto:email@example.com?subject=Inquiry from Sweet Tea and Sunshine Cruise Vacations">sweetteasunshinecruisevac@gmail.com</a></h3>
          </div>
        </div>
        <div className='right'>
          <h4>Connect with us</h4>
          <div className='social'>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100093429484489'>
              <FaFacebook className='fb' />
            </a>
            {/* <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ color: 'white', marginRight: '1rem' }} /> */}
          </div>
          <div className='bottom'>
            <div className='logo-footer'>
              <img src={evoLogo} height='65' />
              <img src={archerLogo} className='archer-logo' height='55' />
            </div>
            <p>
              Copyrights © 2023 All Rights Reserved by Evolution Travel LLC. -<a href='https://www.evotravelagent.com/assets/PrivacyPolicy-f7cbd506874721c3b52e20cb33a9ed2e1e535180a3136f3ef5dd07773508c16e.pdf' target="_blank" rel="noreferrer">Privacy Policy</a>
              "Registered in all states that require Seller of Travel Registration."
              Seller of Travel: Florida Registration #35395, CST #2001330-10, Hawaii #TAR-6612, Washington #603352551
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
