import React from 'react'
import './logo.css'
import carnival from '../assets/ccl-footer-logo.png'
import NWC from '../assets/ncl_Logo_4C_Hrz.jpeg'
import ccCruises from '../assets/CEL_Celebrity_Cruises_Journey_Wonderfull_Logo_Navy.jpg'
import princessCruises from '../assets/Princess_RGB_2line_2022.jpg'
import RC from '../assets/RCI_RC_Logo_3PMS.jpg'
import affiliate from '../assets/Affiliated-Archer-logo.png'

export const Logo = () => {
  return (
    <div className='logo-container'>
        {/* <div><h3>Proud Partner of: </h3></div> */}
        <img src={affiliate} height='50' /> 
        <img src={NWC} height='25' />
        <img src={carnival} height='55' />
        <img src={ccCruises} height='45' />
        <img src={princessCruises} height='49'/>
        <img src={RC} height='43' />
    </div>
  )
}
