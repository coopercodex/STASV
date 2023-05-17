import React, { useEffect, useState } from 'react'
import './destinations.css'
import travelData from './travelData.js'
import SimpleImageSlider from "react-simple-image-slider";

export const Destinations = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const minWidth = 1040

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, [])
  return (
    <div className='destinations-container'>
      <h1>Voyages around the World</h1>
      <div className='destinations-underline' />
      <div className='destinations-body'>
        <p>
          Experience the world in the comfort of your own ship cabin! Your voyage will spend more than 100 days, visiting over 50 unique ports, in approximately 30 countries!
          Glamorous cities, small villages, off the beaten path excursions, or traditional sightseeing in historic locations, are all included in these dream vacations! Only on a world cruise can you see the Northern Lights of Iceland, and the city lights of New York, the lush green cliffs of the Azores and the deserts of Egypt all in one trip!
          So pack your bags and see all of the amazing sites our world has to offer!
        </p>
      </div>
      <div className='destinations'>
        {travelData.map((place) => (
          <div className='dcard' key={place.id}>
            <h2>{place.title}</h2>
            <div className='destinations-card'>

              {width > minWidth ? (
                <SimpleImageSlider
                  className='container'
                  width={450}
                  height={300}
                  images={place.photo}
                  showBullets={true}
                  showNavs={true}
                />
              ) : (
                <SimpleImageSlider
                  className='container'
                  width={370}
                  height={300}
                  images={place.photo}
                  showBullets={true}
                  showNavs={true}
                />
              )}

              {/* <img src={place.photo} className='destination-image' /> */}
              {/* <h5 className='credit'>Photo By: {place.credit?.name} from <a href={place.credit?.link}>Unsplash</a></h5> */}
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
