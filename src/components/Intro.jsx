import React from 'react'
import ReactPlayer from 'react-player'
import './intro.css'

export const Intro = () => {

  return (
    <div className='intro-container'>
      <h1>Welcome to Sweet Tea + Sunshine Cruise Vacations!</h1>
      <div className='intro-underline' />
      <div className='intro-body'>
        <p>Welcome to Sweet Tea + Sunshine Cruise Vacations, where we design your custom cruise vacation with kindness and joy! On your cruise, you will make cherished memories, visit exotic destinations, and just relax and have fun...we will find you the best cruise vacation for the best value! Whether you need a preflight hotel, a car rental, or an airline flight to the port city, we can help! So pack your bags and let's embark on the cruise adventure of a lifetime!!!
        </p>
      </div>
        <ReactPlayer
          className='intro-video'
          url={'https://youtu.be/neYdRtmnSzE'}
          playing={false}
          loop={true}
          width='640px'
          height='360px'
          controls={true}
          style={{marginTop: '3rem'}}
        />
    </div>
  )
}
