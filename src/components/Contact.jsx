import React, { useEffect } from 'react'
import './contact.css'


export const Contact = () => {

  return (
    <div className='contact-container'>
      <div className='contact-body'>
        <h1>Contact Us</h1>
        <p>
          Thank you for considering our cruise travel site for your upcoming vacation. We strive to provide the highest level of customer service and support to ensure that your trip is smooth and enjoyable from start to finish.
          If you have any questions, concerns, or feedback, please feel free to reach out to us via any of the methods below.
        </p>

        <h2>Email:</h2>
        <p>Please send an email to <a href="mailto:email@example.com?subject=Inquiry from Sweet Tea and Sunshine Cruise Vacations">sweetteasunshinecruisevac@gmail.com</a></p>

        <h2>Phone:</h2>
        <p>Our phone number is 1-805-708-3851. Our team is available to take your call Monday-Friday 8 AM - 5 PM EST.</p>

        <h2>Plan your vacation:</h2>
        <p>Ready to plan your next vacation? Simply fill out the form below and we will respond as soon as possible.</p>
        <a href='https://form.jotform.com/200584241741146' target="_blank" rel="noreferrer">
          <button className='contact-btn'>Let's Explore</button>
        </a>
        <h3 className='quote'>
          We look forward to hearing from you and helping you plan your dream cruise vacation.
        </h3>
        <p className='signature'>- Bonnie</p>
      </div>
    </div>
  )
}
