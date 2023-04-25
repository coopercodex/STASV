import React from 'react'
import './destinations.css'
import travelData from './travelData.js'

export const Destinations = () => {
  return (
    <div className='destinations-container'>
      <h1>Destinations</h1>
      <div className='destinations'>
        {travelData.map((place) => (
          <div key={place.id}>
            <h2>{place.title}</h2>
            <div className='destinations-card'>
              <img src={place.photo} className='destination-image' />
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
