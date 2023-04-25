import React from 'react'
import './logo.css'
import evoLogo from '../assets/1681324327187blob.jpg'
import archerLogo from '../assets/1681772822800blob.jpg'
import ccCruises from '../assets/CEL_Celebrity_Cruises_Journey_Wonderfull_Logo_Navy.jpg'
import princessCruises from '../assets/Princess_RGB_2line_2022.jpg'
import RC from '../assets/RCI_RC_Logo_3PMS.jpg'
import affiliate from '../assets/Affiliated-Archer-logo.png'

export const Logo = () => {
  return (
    <div className='logo-container'>
        {/* <div><h3>Proud Partner of: </h3></div> */}
        {/* <img src={evoLogo} height='70' /> */}
        <img src={affiliate} height='60' /> 
        {/* <img src={archerLogo} height='65' /> */}
        <img src={ccCruises} height='55' />
        <img src={princessCruises} height='59'/>
        <img src={RC} height='53' />
    </div>
  )
}
