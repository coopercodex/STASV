import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'
import profilePic from './assets/Unknown.jpeg'

export const About = () => {
  return (
    <div className='about-container'>
      <h1>
        Meet your travel advisor: Bonnie Cribben
      </h1>
      <div className='about-description-container'>
        <img src={profilePic} height={400} style={{ objectFit: 'contain' }} />
        <div className='about-intro'>
          <h3>Hi Everyone!</h3>
          <p>Whether you want to travel to exotic destinations, to relax and be pampered on a luxurious ship, to have a fun family adventure, or to have a romantic getaway, I can help make your CRUISE dreams come true!
          </p>
          <p>
          As an affiliate of Archer Travel Service, Sweet Tea+Sunshine Cruise Vacations works with a worldwide trusted agency with over 70 years' experience. We can save you time, have access to special offers, help with any problems that may arise, have reliable relationships with trusted suppliers, and can give you friendly service that you can count on.
          </p>
          <p>
            Just contact me below with as much information as you can, and we can start planning your trip of a lifetime...
          </p>
          <a href='https://form.jotform.com/200584241741146' target="_blank" rel="noreferrer">
            <button className='about-btn'>Let's Explore</button>
          </a>
        </div>
      </div>
    </div>
  )
}

// Hi everyone!

// Whether you want to travel to exotic destinations, to relax and be pampered on a luxurious ship, to have a fun family adventure, or to have a romantic getaway, I can help make your CRUISE dreams come true!
// Just contact me below with as much information as you can, and we can start planning your trip of a lifetime...

// phone or text: 805-708-3851
// email: 

// (Insert of the JOTFORM LINK with questionnaire inquiry form...)
